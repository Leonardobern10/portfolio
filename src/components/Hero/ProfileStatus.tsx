type ProfileStatusProps = {
    status: string[];
};
export default function ProfileStatus({ status }: ProfileStatusProps) {
    return (
        <div className="flex gap-2 flex-wrap mt-4">
            {status.map((b, i) => (
                <span
                    key={b}
                    className={`font-mono-custom text-[11px] px-3 py-1.5 rounded-sm border ${
                        i === 0
                            ? 'border-accent text-accent'
                            : 'border-white/9 text-[#888580]'
                    }`}>
                    {b}
                </span>
            ))}
        </div>
    );
}
