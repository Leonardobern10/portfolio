type ProjectTechsProps = {
    techs: string[];
};

const styles = {
    container: 'flex flex-row flex-wrap justify-start w-full gap-4',
    tech: 'w-fit rounded font-rubik bg-neutral-800 px-3 py-1 font-medium text-pink-700 whitespace-nowrap border-2 border-pink-900/20',
};

export default function ProjectTechs({ techs }: ProjectTechsProps) {
    return (
        <div className={styles.container}>
            {techs.map((tech: string, index: number) => (
                <span key={index} className={styles.tech}>
                    {tech}
                </span>
            ))}
        </div>
    );
}
