import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { optionsAnimation } from './Carousel.options';

type CarrouselAutoPlayProps = {
    repositoryTopics: string[];
};

export default function CarrouselAutoPlay({
    repositoryTopics,
}: CarrouselAutoPlayProps) {
    return (
        <Carousel {...optionsAnimation}>
            {repositoryTopics.map((topic, index) => (
                <div key={index}>
                    <p>{topic.toUpperCase()}</p>
                </div>
            ))}
        </Carousel>
    );
}
