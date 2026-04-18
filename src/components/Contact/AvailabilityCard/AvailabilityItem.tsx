type AvailabilityItemProps = {
    item: string;
};

export default function AvailabilityItem({ item }: AvailabilityItemProps) {
    return (
        <div className="flex items-center gap-3">
            <span className="font-mono-custom text-[12px] text-accent">✓</span>
            <span className="text-[#888580] text-[14px]">{item}</span>
        </div>
    );
}
