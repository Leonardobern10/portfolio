import { MEDIUM_URL } from '../../../data/articlesData';
import Link from '../../Link';
import ArticleTitle from './ArticleTitle';
import ContainerTags from './ContainerTags';

type ArticleItemProps = {
    title: string;
    tags: string[];
};

export default function ArticleItem({ title, tags }: ArticleItemProps) {
    return (
        <a
            href={MEDIUM_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-[#0a0a0b] p-8 hover:bg-[#18181c] transition-colors group block"
        >
            <ContainerTags tags={tags} />
            <ArticleTitle title={title} />
            <Link text="Read on Medium →" />
        </a>
    );
}
