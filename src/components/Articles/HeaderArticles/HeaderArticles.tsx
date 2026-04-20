import { heroAnimateVariants } from '../../../animations';
import DescriptionSection from '../../DescriptionSection';
import TitleSection from '../../TitleSection';
import TextHeaderArticles from './TextHeaderArticles';
import { motion } from 'motion/react';

export default function HeaderArticles() {
    return (
        <motion.div {...heroAnimateVariants} className="mb-16">
            <TitleSection title="Writing" />
            <DescriptionSection
                beforeBreak="Thinking out loud"
                afterBreak="about engineering."
            />
            <TextHeaderArticles
                text='I write about software engineering fundamentals and architecture on
            Medium — because understanding the "why" matters as much as knowing
            the "how."'
            />
        </motion.div>
    );
}
