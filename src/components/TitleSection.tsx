type TitleSectionProps = {
    titleSection: string;
};

export default function TitleSection({ titleSection }: TitleSectionProps) {
    return (
        <h2 className="my-20 text-center text-3xl">
            {titleSection[0]}
            <span className="text-neutral-500"> {titleSection[1]}</span>
        </h2>
    );
}
