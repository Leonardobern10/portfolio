type ButtonMainProps = {
    title: string;
    href: string;
};

export default function ButtonMain({ title, href }: ButtonMainProps) {
    return (
        <a
            href={href}
            className="font-mono-custom text-[13px] text-[#0a0a0b] bg-accent px-8 py-3.5 rounded-sm tracking-wide hover:opacity-85 transition-opacity">
            {title}
        </a>
    );
}
