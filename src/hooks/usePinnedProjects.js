import { useEffect, useState } from "react";
import axios from "axios";

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const usePinnedProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPinnedRepos = async () => {
      if (!GITHUB_USERNAME || !GITHUB_TOKEN) {
        console.error("Erro: Variáveis de ambiente não configuradas.");
        setError("Configuração ausente");
        setLoading(false);
        return;
      }

      const query = {
        query: `
          {
            user(login: "${GITHUB_USERNAME}") {
              pinnedItems(first: 6, types: REPOSITORY) {
                nodes {
                  ... on Repository {
                    name
                    url
                    description
                    homepageUrl
                    stargazerCount
                    forkCount
                    primaryLanguage {
                      name
                      color
                    }
                    languages(first: 10) { 
                      nodes { 
                        name 
                      } 
                    }
                  }
                }
              }
            }
          }
        `,
      };

      try {
        const response = await axios.post(
          "https://api.github.com/graphql",
          query,
          {
            headers: {
              Authorization: `Bearer ${GITHUB_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.data?.data?.user) {
          throw new Error(
            "Erro ao buscar dados. Verifique seu token e usuário."
          );
        }

        const repos = response.data.data.user.pinnedItems.nodes.map((repo) => ({
          title: repo.name,
          url: repo.url,
          description: repo.description,
          homepageUrl: repo.homepageUrl,
          stars: repo.stargazerCount,
          forks: repo.forkCount,
          language: repo.primaryLanguage
            ? {
                name: repo.primaryLanguage.name,
                color: repo.primaryLanguage.color,
              }
            : null,
          image: `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`,
          technologies: repo.languages.nodes.map((lang) => lang.name), // 🚀 TODAS AS LINGUAGENS!
        }));
        setProjects(repos);
      } catch (err) {
        console.error("Erro ao buscar repositórios:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPinnedRepos();
  }, []);

  return { projects, loading, error };
};

export default usePinnedProjects;
