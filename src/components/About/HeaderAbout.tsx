import DescriptionSection from '../DescriptionSection';
import TitleSection from '../TitleSection';

export default function HeaderAbout() {
    return (
        <div className="mb-16 fade-in">
            <TitleSection title="About" />
            <DescriptionSection
                beforeBreak="Engineer by trade,"
                afterBreak="architect by instinct."
            />
        </div>
    );
}
