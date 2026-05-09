import type { ArticleMedium } from '../types/ArticlesType';

const url = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@leonardo.bernardo2658`;

export default async function getMedium(): Promise<
    ArticleMedium[] | undefined
> {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.items.splice(6));
        return data.items;
    } catch (error) {
        console.error(error);
    }
}
