import { motion } from "framer-motion";
import usePinnedProjects from "../hooks/usePinnedProjects";

const Projects = () => {
  const { projects, loading, error } = usePinnedProjects();

  if (loading) {
    return (
      <p className="text-center text-neutral-400">Carregando projetos...</p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500">Erro ao carregar projetos.</p>
    );
  }
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projetos
      </motion.h2>
      <div>
        {projects.map((project, index) => (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            key={index}
            className="mb-8 flex max-md:flex-col md:items-center flex-wrap md:justify-center md:gap-x-4 hover:shadow-red-400 rounded-2xl"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-1/2 lg:w-1/4"
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-8 h-48 w-48 max-lg:w-full object-cover rounded hover:shadow-2xl hover:shadow-red-400"
                />
              </a>
            </motion.div>
            <div className="w-full max-w-xl md:w-1/2 lg:w-3/4 p-8 rounded-2xl ">
              <h6 className="mb-2 font-smibold">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h6>
              <p className="mb-4 text-justify text-neutral-400">
                {project.description}
              </p>
              <div className="flex flex-row flex-wrap justify-start w-full">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="w-fit m-2 rounded bg-neutral-900 px-3 py-1 font-medium text-pink-900 whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div>
        <p>
          Para ver outro projetos{" "}
          <a
            href="https://github.com/Leonardobern10"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400"
          >
            {" "}
            👉CLIQUE AQUI👈
          </a>
          😉
        </p>
      </div>
    </div>
  );
};

export default Projects;
