type ProjectTitleProps = {
    title: string;
    url: string;
};

const styles = {
    projectTitle: 'mb-2 tracking-tight font-semibold',
    projectLink:
        'text-2xl hover:text-pink-900 tracking-wide font-rubik font-bold',
};

const options = {
    target: '_blank',
    rel: 'noopener noreferrer',
};

export default function ProjectTitle({ title, url }: ProjectTitleProps) {
    return (
        <h4 className={styles.projectTitle}>
            <a href={url} className={styles.projectLink} {...options}>
                {title.replaceAll('_', ' ')}
            </a>
        </h4>
    );
}
