import { motion } from 'framer-motion';
import useLanguageStore from '../../store/useLanguage';

export default function TitleSectionAnimated({
    titleSection,
}: {
    titleSection: any;
}) {
    const { language } = useLanguageStore();
    return (
        <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl"
        >
            {titleSection[language]}
        </motion.h2>
    );
}
