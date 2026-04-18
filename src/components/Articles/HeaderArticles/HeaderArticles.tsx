import TitleSection from '../../TitleSection';

export default function HeaderArticles() {
    return (
        <div className="mb-16 fade-in">
            <TitleSection title="Writing" />
            <h2 className="font-serif-custom text-4xl md:text-5xl font-light tracking-[-0.02em] leading-[1.1] mb-4">
                Thinking out loud
                <br />
                about engineering.
            </h2>
            <p className="text-[#888580] text-[16px] max-w-[520px] leading-[1.8]">
                I write about software engineering fundamentals and architecture
                on Medium — because understanding the "why" matters as much as
                knowing the "how."
            </p>
        </div>
    );
}
