import { useEffect, useState } from 'react';
import { scrapMedium } from '../constants/articles';

export const useArticles = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const articles = await scrapMedium(); // Aguarda os dados
            setData(articles); // Armazena os dados no estado
        };

        fetchArticles(); // Chama a função ao carregar o componente
    }, []);

    return { data };
};
