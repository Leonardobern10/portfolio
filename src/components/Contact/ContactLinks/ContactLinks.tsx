import type { ContactLink } from '../../../types/ContactLinkType';
import ContactLinkItem from './ContactLinkItem';

type ContactLinksProps = {
    contactLinks: ContactLink[];
};

export default function ContactLinks({ contactLinks }: ContactLinksProps) {
    return (
        <div className="space-y-4">
            {contactLinks.map((link) => (
                <ContactLinkItem
                    label={link.label}
                    href={link.href}
                    value={link.value}
                    key={link.label}
                />
            ))}
        </div>
    );
}
