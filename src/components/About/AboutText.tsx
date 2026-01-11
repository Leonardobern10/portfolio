import { motion } from 'framer-motion';
import { ABOUT_TEXT_CONTENT } from '../../constants';
import useLanguageStore from '../../store/useLanguage';

const styles = {
    container: 'w-full lg:w-1/2 lg:p-8 h-full',
    content: 'flex-row justify-center items-center',
    text: 'text-lg font-light text-justify w-full md:px-12',
};

const options = {
    whileInView: { opacity: 1, x: 0 },
    initial: { opacity: 0, x: 100 },
    transition: { duration: 0.5 },
    className: styles.container,
};

export default function AboutText() {
    const { language } = useLanguageStore();
    return (
        <motion.div {...options}>
            <div className={styles.content}>
                <p className={styles.text}>{ABOUT_TEXT_CONTENT[language]}</p>
            </div>
        </motion.div>
    );
}
