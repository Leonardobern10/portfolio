import type { StatsType } from '../../../types/StatsType';
import StatsItem from './StatsItem';

type StatsProps = {
    data: StatsType[];
};

export default function Stats({ data }: StatsProps) {
    return (
        <div className="fade-in delay-100">
            <div className="grid grid-cols-2 gap-px bg-white/6 border border-white/6">
                {data.map((s) => (
                    <StatsItem key={s.label} label={s.label} num={s.num} />
                ))}
            </div>
        </div>
    );
}
