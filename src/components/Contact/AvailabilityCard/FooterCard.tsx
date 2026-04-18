type FooterCardProps = {
    title: string;
    content: string;
};

export default function FooterCard({ title, content }: FooterCardProps) {
    return (
        <div className="border-t border-white/6 pt-6">
            <p className="font-mono-custom text-[11px] text-[#555250] uppercase tracking-wide mb-1">
                {title}
            </p>
            <p className="text-[#888580] text-[14px]">{content}</p>
        </div>
    );
}
