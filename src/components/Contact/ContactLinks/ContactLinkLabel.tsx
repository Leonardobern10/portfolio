type ContactLinkLabelProps = {
    label: string;
};

export default function ContactLinkLabel({ label }: ContactLinkLabelProps) {
    return (
        <span className="font-mono-custom text-[11px] text-[#555250] w-16 tracking-wide flex-shrink-0">
            {label}
        </span>
    );
}
