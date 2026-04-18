type ArticleTitleProps = {
    title: string;
};

export default function ArticleTitle({ title }: ArticleTitleProps) {
    return (
        <p className="text-[#f0ede8] text-[15px] leading-[1.45] mb-4">
            {title}
        </p>
    );
}
