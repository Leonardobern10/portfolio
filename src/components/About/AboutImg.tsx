import { motion } from 'framer-motion';
import aboutImg from '../../assets/about.jpg';

const styles = {
    container: 'w-full lg:w-1/2 lg:p-8 h-full',
    content: 'flex items-center justify-center',
    img: 'rounded-3xl',
};

const options = {
    whileInView: { opacity: 1, x: 0 },
    initial: { opacity: 0, x: -100 },
    transition: { duration: 0.5 },
    className: styles.container,
};

export default function AboutImg() {
    return (
        <motion.div {...options}>
            <div className={styles.content}>
                <img className={styles.img} src={aboutImg} alt="about" />
            </div>
        </motion.div>
    );
}
