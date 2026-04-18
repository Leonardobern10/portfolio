import TitleSection from '../../TitleSection';

type HeaderCardProjectProps = {
    title: string;
    desc: string;
};

export default function HeaderCardProject({
    title,
    desc,
}: HeaderCardProjectProps) {
    return (
        <div className="max-w-275 mx-auto px-10">
            <div className="mb-16 fade-in">
                <TitleSection title={title} />
                <h2 className="font-serif-custom text-4xl md:text-5xl font-light tracking-[-0.02em] leading-[1.1]">
                    {desc}
                </h2>
            </div>
        </div>
    );
}
