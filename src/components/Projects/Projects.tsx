import { motion } from 'framer-motion';
import usePinnedProjects from '../../hooks/usePinnedProjects';
import { SECTIONS } from '../../constants';
import useLanguageStore from '../../store/useLanguage';
import ProjectTechs from './ProjectStack';
import ProjectLinks from './ProjectLinks';
import ProjectDescription from './ProjectDescription';
import ProjectTitle from './ProjectTitle';
import ProjectTopics from './ProjectTopics';
import TitleSectionAnimated from '../TitleSections/TitleSectionAnimated';

const styles = {
    loading: 'text-center text-neutral-400',
    error: 'text-center text-red-500',
    container: 'border-b border-neutral-900 pb-4',
    containerProjects:
        'md:grid md:grid-cols-2 md:gap-10 md:place-items-center md:items-center',
    project:
        'mb-8 flex max-md:flex-col md:items-center flex-wrap md:justify-evenly md:gap-x-10 hover:shadow-red-400 rounded-2xl',
    projectContent:
        'flex flex-col w-full max-w-xl md:w-1/2 lg:w-3/4 py-8 gap-y-2',

    containerImg: 'w-full md:w-1/2 lg:w-1/4',
    img: 'mb-8 h-fit w-fit max-lg:w-full object-contain rounded hover:shadow-2xl hover:shadow-red-400',
};

const msgs = {
    loading: 'Carregando projetos ...',
    error: 'Erro ao carregar projetos',
};

const optionsAnimated = (id: string, className: string) => ({
    whileInView: { opacity: 1, x: 0 },
    initial: { opacity: 0, x: -100 },
    transition: { duration: 0.5 },
    key: id,
    className: className,
});

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
            <TitleSectionAnimated titleSection={SECTIONS.PROJECTS} />
            <div className={styles.containerProjects}>
                {projects.map((project) => (
                    <motion.div
                        {...optionsAnimated(project.id, project.className)}
                    >
                        {/*
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
                        
                        */}
                        <div className={styles.projectContent}>
                            <ProjectTitle
                                title={project.title}
                                url={project.url}
                            />
                            <ProjectTopics topics={project.repositoryTopics} />
                            <ProjectDescription
                                description={project.description}
                            />
                            <ProjectTechs techs={project.technologies} />
                            <ProjectLinks
                                urlSite={project.homepageUrl}
                                urlRepository={project.url}
                            />
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
