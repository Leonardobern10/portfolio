import { heroAnimateVariants } from '../../../animations';
import { MEDIUM_URL } from '../../../data/articlesData';
import ButtonLink from '../../ButtonLink';
import { motion } from 'motion/react';

export default function FooterArticles() {
    return (
        <motion.div
            {...heroAnimateVariants}
            className="mt-8 text-center fade-in">
            <ButtonLink title="All articles on Medium →" href={MEDIUM_URL} />
        </motion.div>
    );
}
