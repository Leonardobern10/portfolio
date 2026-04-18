import ContactLinkLabel from './ContactLinkLabel';
import ContactLinkValue from './ContactLinkValue';

type ContactLinkItemProps = {
    label: string;
    href: string;
    value: string;
};

export default function ContactLinkItem({
    label,
    href,
    value,
}: ContactLinkItemProps) {
    return (
        <a
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            className="flex items-center gap-6 group"
        >
            <ContactLinkLabel label={label} />
            <ContactLinkValue value={value} />
        </a>
    );
}
