import { IconType } from 'react-icons/lib';

type NavbarItemProps = {
    href: string;
    icon: IconType;
    download?: string;
    text?: string;
};

export default function NavbarItem({
    href,
    icon,
    download,
    text,
}: NavbarItemProps) {
    const Icon = icon;
    return (
        <li>
            <a
                href={href}
                download={download ? download : null}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="flex flex-col items-center hover:text-red-500">
                    <Icon className='navbar-item"' />
                    <p className="text-xs">{text}</p>
                </div>
            </a>
        </li>
    );
}
