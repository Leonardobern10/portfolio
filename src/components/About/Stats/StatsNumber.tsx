type StatsNumberProps = {
  num: string;
};

export default function StatsNumber({ num }: StatsNumberProps) {
  return (
    <div className="font-serif-custom text-[2.5rem] font-light text-accent leading-none mb-2">
      {num}
    </div>
  );
}
