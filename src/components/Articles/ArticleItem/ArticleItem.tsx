import { itemListAnimationVariants } from '../../../animations';
import { MEDIUM_URL } from '../../../data/articlesData';
import Link from '../../Link';
import ArticleTitle from './ArticleTitle';
import ContainerTags from './ContainerTags';
import { motion } from 'motion/react';

type ArticleItemProps = {
    title: string;
    categories: string[];
    link: string;
};

export default function ArticleItem({
    title,
    categories,
    link,
}: ArticleItemProps) {
    return (
        <motion.a
            variants={itemListAnimationVariants}
            href={MEDIUM_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-[#0a0a0b] p-8 hover:bg-[#18181c] transition-colors group block">
            <ContainerTags tags={categories} />
            <ArticleTitle title={title} />
            <Link href={link} text="Read on Medium →" />
        </motion.a>
    );
}
