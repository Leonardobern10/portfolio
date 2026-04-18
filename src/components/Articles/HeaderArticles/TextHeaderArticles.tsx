type TextHeaderArticlesProps = {
    text: string;
};

export default function TextHeaderArticles({ text }: TextHeaderArticlesProps) {
    return (
        <p className="text-[#888580] text-[16px] max-w-[520px] leading-[1.8]">
            {text}
        </p>
    );
}
