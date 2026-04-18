type ButtonMainProps = {
    title: string;
    href: string;
    small?: boolean;
};

export default function ButtonMain({
    title,
    href,
    small = false,
}: ButtonMainProps) {
    return (
        <a
            href={href}
            className={`font-mono-custom text-[13px] text-[#0a0a0b] bg-accent ${small ? 'px-4 py-2' : 'px-8 py-3.5'} rounded-sm tracking-wide hover:opacity-85 transition-opacity`}>
            {title}
        </a>
    );
}
