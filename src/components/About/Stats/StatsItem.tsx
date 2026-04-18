import StatsLabel from "./StatsLabel";
import StatsNumber from "./StatsNumber";

type StatsItemProps = {
  num: string;
  label: string;
};

export default function StatsItem({ num, label }: StatsItemProps) {
  return (
    <div className="bg-[#0a0a0b] p-6">
      <StatsNumber num={num} />
      <StatsLabel label={label} />
    </div>
  );
}
