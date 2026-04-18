type LinkProjectProps = {
    link: string;
    text: string;
    live?: string;
};

export default function LinkProject({ link, text, live }: LinkProjectProps) {
    return (
        <div className="flex gap-4">
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="font-mono-custom text-[12px] text-[#555250] border-b border-white/9 pb-px hover:text-accent hover:border-accent transition-colors tracking-wide">
                {text} →
            </a>
            {live && (
                <a
                    href={live}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono-custom text-[12px] text-[#555250] border-b border-white/9 pb-px hover:text-[#47ffd8] hover:border-[#47ffd8] transition-colors tracking-wide">
                    Live →
                </a>
            )}
        </div>
    );
}
