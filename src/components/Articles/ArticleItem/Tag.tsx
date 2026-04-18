type TagProps = {
    tagName: string;
};

export default function Tag({ tagName }: TagProps) {
    return (
        <span className="font-mono-custom text-[10px] px-2 py-1 bg-[#111113] text-[#555250] rounded-sm">
            {tagName}
        </span>
    );
}
