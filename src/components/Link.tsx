type LinkProps = {
    text: string;
};

export default function Link({ text }: LinkProps) {
    return (
        <span className="font-mono-custom text-[11px] text-[#47ffd8] tracking-wide border-b border-transparent group-hover:border-[#47ffd8] pb-px transition-colors">
            {text}
        </span>
    );
}
