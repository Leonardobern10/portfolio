export const heroAnimateVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.2 },
};

export const itemListAnimationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export const containerListAnimationVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3, // delay entre cada item
        },
    },
};
