import DescriptionSection from '../../DescriptionSection';
import TitleSection from '../../TitleSection';
import TextHeaderArticles from './TextHeaderArticles';

export default function HeaderArticles() {
    return (
        <div className="mb-16 fade-in">
            <TitleSection title="Writing" />
            <DescriptionSection
                beforeBreak="Thinking out loud"
                afterBreak="about engineering."
            />
            <TextHeaderArticles
                text='I write about software engineering fundamentals and architecture on
            Medium — because understanding the "why" matters as much as knowing
            the "how."'
            />
        </div>
    );
}
