import { motion } from 'framer-motion';
import { IconType } from 'react-icons/lib';

const iconVariants = (duration: number) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse' as const,
        },
    },
});

type TechProps = {
    icon: IconType;
    style: string;
};

export default function Tech({ icon, style }: TechProps) {
    const Icon = icon;
    const result = Math.random() * 10;
    const duration = result > 3 ? result : result * 15;
    return (
        <motion.div
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            className="tech-container"
        >
            <Icon className={`tech ${style}`} />
        </motion.div>
    );
}
