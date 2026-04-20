import {
    containerListAnimationVariants,
    heroAnimateVariants,
} from '../../animations';
import { articles } from '../../data/articlesData';
import ArticleItem from './ArticleItem/ArticleItem';
import FooterArticles from './FooterArticles/FooterArticles';
import HeaderArticles from './HeaderArticles/HeaderArticles';
import { motion } from 'motion/react';

export default function Articles() {
    return (
        <section id="writing" className="py-28">
            <div className="max-w-275 mx-auto px-10">
                {/* Header */}
                <HeaderArticles />

                {/* Grid */}
                <motion.div
                    variants={containerListAnimationVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/6">
                    {articles.map((article) => (
                        <ArticleItem
                            tags={article.tags}
                            title={article.title}
                            key={article.title}
                        />
                    ))}
                </motion.div>

                {/* CTA */}
                <FooterArticles />
            </div>
        </section>
    );
}
