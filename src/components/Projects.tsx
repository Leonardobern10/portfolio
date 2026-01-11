import { motion } from 'framer-motion';
import usePinnedProjects from '../hooks/usePinnedProjects';
import ButtonLink from './ButtonLink';
import { SECTIONS } from '../constants';
import useLanguageStore from '../store/useLanguage';
import CarrouselAutoPlay from './Carousel/CarrouselAutoPlay';

const styles = {
    loading: 'text-center text-neutral-400',
    error: 'text-center text-red-500',
    container: 'border-b border-neutral-900 pb-4',
    titleSection: 'my-20 text-center text-4xl',
    project:
        'mb-8 flex max-md:flex-col md:items-center flex-wrap md:justify-evenly md:gap-x-10 hover:shadow-red-400 rounded-2xl',
    containerImg: 'w-full md:w-1/2 lg:w-1/4',
    img: 'mb-8 h-fit w-fit max-lg:w-full object-contain rounded hover:shadow-2xl hover:shadow-red-400',
};

const msgs = {
    loading: 'Carregando projetos ...',
    error: 'Erro ao carregar projetos',
};

export default function Projects() {
    const { projects, loading, error } = usePinnedProjects();
    const { language } = useLanguageStore();

    if (loading) {
        return <p className={styles.loading}>{msgs.loading}</p>;
    }

    if (error) {
        return <p className={styles.error}>{msgs.error}</p>;
    }

    return (
        <div className={styles.container}>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className={styles.titleSection}
            >
                {SECTIONS.PROJECTS[language]}
            </motion.h2>
            <div>
                {projects.map((project) => (
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        key={project.id}
                        className={styles.project}
                    >
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className={styles.containerImg}
                        >
                            <a
                                href={project.homepageUrl ?? project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={styles.img}
                                />
                            </a>
                        </motion.div>
                        <div className="w-full max-w-xl md:w-1/2 lg:w-3/4 py-8">
                            <h4 className="mb-2 tracking-tight font-semibold">
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg md:text-2xl hover:text-pink-900 tracking-wide font-rubik font-bold"
                                >
                                    {project.title.replaceAll('_', ' ')}
                                </a>
                            </h4>
                            <div className="my-2">
                                {project.repositoryTopics && (
                                    <CarrouselAutoPlay
                                        repositoryTopics={
                                            project.repositoryTopics
                                        }
                                    />
                                )}
                            </div>
                            <p className="md:text-lg mb-4 text-justify text-neutral-400">
                                {project.description}
                            </p>
                            <div className="flex flex-row flex-wrap justify-start w-full gap-4">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="w-fit rounded font-rubik bg-neutral-800 px-3 py-1 font-medium text-pink-700 whitespace-nowrap border-2 border-pink-900/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-row items-center gap-x-4">
                                {project.homepageUrl && (
                                    <ButtonLink
                                        title="Site"
                                        href={project.homepageUrl}
                                    />
                                )}
                                {project.url && (
                                    <ButtonLink
                                        title="Github"
                                        href={project.url}
                                    />
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div>
                <p>
                    <a
                        href="https://github.com/Leonardobern10"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-400"
                    >
                        {' '}
                        {SECTIONS.PROJECTS.OTHER[language]}
                    </a>
                </p>
            </div>
        </div>
    );
}
