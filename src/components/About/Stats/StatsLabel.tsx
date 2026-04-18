type StatsLabelProps = {
  label: string;
};

export default function StatsLabel({ label }: StatsLabelProps) {
  return (
    <div className="font-mono-custom text-[11px] text-[#888580] tracking-[0.08em] uppercase">
      {label}
    </div>
  );
}
