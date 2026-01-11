type ProjectDescriptionProps = {
    description: string;
};

const styles = {
    container: 'text-body mb-4 text-justify text-neutral-400',
};

export default function ProjectDescription({
    description,
}: ProjectDescriptionProps) {
    return <p className={styles.container}>{description}</p>;
}
