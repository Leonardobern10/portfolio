import { articles, MEDIUM_URL } from '../../data/articlesData';
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
                        <a
                            key={article.title}
                            href={MEDIUM_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-[#0a0a0b] p-8 hover:bg-[#18181c] transition-colors group block"
                        >
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {article.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="font-mono-custom text-[10px] px-2 py-1 bg-[#111113] text-[#555250] rounded-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-[#f0ede8] text-[15px] leading-[1.45] mb-4">
                                {article.title}
                            </p>
                            <span className="font-mono-custom text-[11px] text-[#47ffd8] tracking-wide border-b border-transparent group-hover:border-[#47ffd8] pb-px transition-colors">
                                Read on Medium →
                            </span>
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-8 text-center fade-in">
                    <a
                        href={MEDIUM_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono-custom text-[13px] text-[#f0ede8] border border-white/[0.15] px-8 py-3.5 rounded-sm inline-block hover:border-white transition-colors tracking-wide"
                    >
                        All articles on Medium →
                    </a>
                </div>
            </div>
        </section>
    );
}
