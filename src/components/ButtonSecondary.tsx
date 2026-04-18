type ButtonSecondaryProps = {
    title: string;
    href: string;
};

export default function ButtonSecondary({ title, href }: ButtonSecondaryProps) {
    return (
        <a
            href={href}
            className="font-mono-custom text-[13px] text-[#f0ede8] border border-white/15 px-8 py-3.5 rounded-sm tracking-wide hover:border-white transition-colors">
            {title}
        </a>
    );
}
