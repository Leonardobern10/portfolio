type NavBarItemProps = {
    item: string;
};

export default function NavBarItem({ item }: NavBarItemProps) {
    return (
        <a
            href={`#${item.toLowerCase()}`}
            className="font-mono-custom text-[12px] text-[#888580] hover:text-[#f0ede8] tracking-widest uppercase transition-colors duration-200">
            {item}
        </a>
    );
}
