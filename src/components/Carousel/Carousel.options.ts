export const optionsAnimation = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlay: true,
    autoPlaySpeed: 5000,
    centerMode: true,
    className: '',
    containerClass: 'w-full',
    customTransition: 'transform 1s linear',
    dotListClass: '',
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass:
        'w-120 px-1 py-1 tracking-wide text-xs md:text-sm text-neutral-600 text-center hover:text-neutral-200/50 font-rubik whitespace-nowrap rounded-lg bg-pink-800/40 hover:bg-pink-700/40 mx-2',
    keyBoardControl: true,
    minimumTouchDrag: 80,
    pauseOnHover: true,
    renderArrowsWhenDisabled: false,
    renderButtonGroupOutside: false,
    renderDotsOutside: false,
    responsive: {
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
    },

    rewind: false,
    rewindWithAnimation: false,
    rtl: false,
    shouldResetAutoplay: true,
    showDots: false,
    sliderClass: '',
    slidesToSlide: 1,
    swipeable: true,
    transitionDuration: 500,
};
