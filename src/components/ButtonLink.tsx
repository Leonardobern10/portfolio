type ButtonLinkProps = {
    title: string;
    download?: boolean;
    href: string;
};

export default function ButtonLink({
    title,
    href,
    download = false,
}: ButtonLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            download={download}
            className="font-mono-custom text-[13px] text-[#f0ede8] border border-white/15 px-8 py-3.5 rounded-sm inline-block hover:border-white transition-colors tracking-wide">
            {title}
        </a>
    );
}
