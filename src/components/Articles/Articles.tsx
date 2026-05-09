import { containerListAnimationVariants } from '../../animations';
import ArticleItem from './ArticleItem/ArticleItem';
import FooterArticles from './FooterArticles/FooterArticles';
import HeaderArticles from './HeaderArticles/HeaderArticles';
import { motion } from 'motion/react';
import type { ArticleMedium } from '../../types/ArticlesType';

type ArticleProps = {
    articles: ArticleMedium[];
};

export default function Articles({ articles }: ArticleProps) {
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
                    {articles &&
                        articles.map((article: ArticleMedium) => (
                            <ArticleItem
                                categories={article.categories.slice(0, 4)}
                                title={article.title}
                                key={article.title}
                                link={article.link}
                            />
                        ))}
                </motion.div>

                {/* CTA */}
                <FooterArticles />
            </div>
        </section>
    );
}
