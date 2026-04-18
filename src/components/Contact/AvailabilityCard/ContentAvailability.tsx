import AvailabilityItem from './AvailabilityItem';

type ContentAvailabilityProps = {
    data: string[];
};

export default function ContentAvailability({
    data,
}: ContentAvailabilityProps) {
    return (
        <div className="space-y-3 mb-8">
            {data.map((item) => (
                <AvailabilityItem item={item} key={item} />
            ))}
        </div>
    );
}
