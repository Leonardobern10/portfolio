import { articles } from '../../data/articlesData';
import ArticleItem from './ArticleItem/ArticleItem';
import FooterArticles from './FooterArticles/FooterArticles';
import HeaderArticles from './HeaderArticles/HeaderArticles';

export default function Articles() {
    return (
        <section id="writing" className="py-28">
            <div className="max-w-[1100px] mx-auto px-10">
                {/* Header */}
                <HeaderArticles />

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] fade-in">
                    {articles.map((article) => (
                        <ArticleItem
                            tags={article.tags}
                            title={article.title}
                            key={article.title}
                        />
                    ))}
                </div>

                {/* CTA */}
                <FooterArticles />
            </div>
        </section>
    );
}
