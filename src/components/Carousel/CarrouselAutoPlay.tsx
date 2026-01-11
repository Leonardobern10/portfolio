import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

type CarrouselAutoPlayProps = {
    repositoryTopics: string[];
};

export default function CarrouselAutoPlay({
    repositoryTopics,
}: CarrouselAutoPlayProps) {
    return (
        <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={5000}
            centerMode={true}
            className=""
            containerClass=""
            customTransition="transform 1s linear"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass="rounded-lg bg-pink-800/40 hover:bg-pink-700/40 px-1 py-0.5 text-center w-fit mx-2"
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024,
                    },
                    items: 3,
                    partialVisibilityGutter: 40,
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464,
                    },
                    items: 2,
                    partialVisibilityGutter: 30,
                },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            transitionDuration={500}
        >
            {repositoryTopics.map((topic, index) => (
                <div key={index}>
                    <p className="px-1 py-0.5 text-center tracking-wide text-xs md:text-sm font-rubik text-neutral-600 hover:text-neutral-200/50 whitespace-nowrap">
                        {topic.toUpperCase()}
                    </p>
                </div>
            ))}
        </Carousel>
    );
}
