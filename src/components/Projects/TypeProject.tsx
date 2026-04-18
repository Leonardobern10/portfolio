type TypeProjectProps = {
    type: string;
};

export default function TypeProject({ type }: TypeProjectProps) {
    return (
        <span className="font-mono-custom text-[11px] text-accent border border-accent px-2 py-1 rounded-sm tracking-wide">
            {type}
        </span>
    );
}
