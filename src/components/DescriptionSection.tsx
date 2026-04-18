type DescriptionSectionProps = {
    beforeBreak: string;
    afterBreak: string;
};

export default function DescriptionSection({
    beforeBreak,
    afterBreak,
}: DescriptionSectionProps) {
    return (
        <h2 className="font-serif-custom text-4xl md:text-5xl font-light tracking-[-0.02em] leading-[1.1]">
            {beforeBreak}
            <br />
            {afterBreak}
        </h2>
    );
}
