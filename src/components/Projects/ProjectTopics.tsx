import CarrouselAutoPlay from '../Carousel/CarrouselAutoPlay';

type ProjectTopicsProps = {
    topics: string[];
};

const styles = {
    containerTopics: 'my-2',
};

export default function ProjectTopics({ topics }: ProjectTopicsProps) {
    return (
        <div className={styles.containerTopics}>
            {topics && <CarrouselAutoPlay repositoryTopics={topics} />}
        </div>
    );
}
