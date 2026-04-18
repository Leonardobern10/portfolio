import { MEDIUM_URL } from '../../../data/articlesData';
import ButtonLink from '../../ButtonLink';

export default function FooterArticles() {
    return (
        <div className="mt-8 text-center fade-in">
            <ButtonLink title="All articles on Medium →" href={MEDIUM_URL} />
        </div>
    );
}
