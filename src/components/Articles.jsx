import { useEffect, useState } from "react";
import { scrapMedium } from "../constants/articles";
import { motion } from "framer-motion";

const Articles = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await scrapMedium(); // Aguarda os dados
      setData(articles); // Armazena os dados no estado
    };

    fetchArticles(); // Chama a função ao carregar o componente
  }, []);

  return (
    <div className="pb-12 px-4 lg:px-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Artigos
      </motion.h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3">
        {data.map((article, index) => (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.0 }}
            className="my-8 flex text-center text-2xl"
            key={index}
          >
            <div className="bg-neutral-900/70 rounded-md overflow-hidden border-neutral-500 hover:shadow-xs hover:shadow-red-400">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-full h-40"
              >
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-full h-full object-cover"
                    src={article.image}
                    alt={article.title}
                  />
                </a>
              </motion.div>
              <h2 className="max-md:w-7/8 text-lg max-md:text-sm m-4 font-semibold">
                {article.title}
              </h2>
              <ul className="flex flex-wrap w-full gap-2 p-4">
                {article.tags.map((tag, idx) => (
                  <li
                    key={idx}
                    className="mr-2 rounded bg-neutral-900 px-3 py-1 font-medium max-lg:text-xs text-sm text-pink-900 whitespace-nowrap"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
