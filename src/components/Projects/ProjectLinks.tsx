import ButtonLink from '../ButtonLink';

type ProjectLinksProps = {
    urlSite?: string;
    urlRepository?: string;
};

const styles = {
    container: 'flex flex-row items-center gap-x-4',
};

const titles = {
    site: 'Site',
    github: 'Github',
};

export default function ProjectLinks({
    urlSite,
    urlRepository,
}: ProjectLinksProps) {
    return (
        <div className={styles.container}>
            {urlSite && <ButtonLink title={titles.site} href={urlSite} />}
            {urlRepository && (
                <ButtonLink title={titles.github} href={urlRepository} />
            )}
        </div>
    );
}
