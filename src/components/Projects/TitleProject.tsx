type TitleProjectProps = {
    title: string;
};

export default function TitleProject({ title }: TitleProjectProps) {
    return (
        <h3 className="font-serif-custom text-[1.7rem] font-light leading-[1.15] tracking-[-0.01em] mb-3">
            {title}
        </h3>
    );
}
