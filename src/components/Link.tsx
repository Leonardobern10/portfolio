type LinkProps = {
    text: string;
    href: string;
};

export default function Link({ text, href }: LinkProps) {
    return (
        <span className="font-mono-custom text-[11px] text-[#47ffd8] tracking-wide border-b border-transparent group-hover:border-[#47ffd8] pb-px transition-colors">
            <a href={href} target="_blank" rel="noopener noreferrer">
                {text}
            </a>
        </span>
    );
}
