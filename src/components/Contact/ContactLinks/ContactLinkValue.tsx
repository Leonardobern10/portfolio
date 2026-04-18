type ContactLinkValueProps = {
    value: string;
};

export default function ContactLinkValue({ value }: ContactLinkValueProps) {
    return (
        <span className="text-[#f0ede8] text-[15px] border-b border-white/[0.09] pb-0.5 group-hover:text-accent group-hover:border-accent transition-colors">
            {value}
        </span>
    );
}
