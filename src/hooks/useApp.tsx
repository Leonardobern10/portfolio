import { useEffect, useState } from 'react';
import type { ArticleMedium } from '../types/ArticlesType';
import getMedium from '../service/getMedium';

export const useApp = () => {
    const [articles, setArticles] = useState<ArticleMedium[]>();
    useEffect(() => {
        const get = async () => {
            const data = await getMedium();
            setArticles(data);
        };
        get();
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) e.target.classList.add('visible');
                });
            },
            { threshold: 0.1 },
        );
        document.querySelectorAll('.fade-in').forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, []);
    return { articles };
};
