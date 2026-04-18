type DescriptionProjectProps = {
    desc: string;
};

export default function DescriptionProject({ desc }: DescriptionProjectProps) {
    return (
        <p className="text-[#888580] text-[14px] leading-[1.75] mb-5">{desc}</p>
    );
}
