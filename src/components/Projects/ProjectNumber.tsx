type ProjectNumberProps = {
    num: number | string;
};

export default function ProjectNumber({ num }: ProjectNumberProps) {
    return (
        <span className="font-mono-custom text-[11px] text-[#555250] tracking-[0.1em]">
            {num}
        </span>
    );
}
