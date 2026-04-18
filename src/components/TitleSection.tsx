type TitleSectionProps = {
  title: string;
};

export default function TitleSection({ title }: TitleSectionProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="block w-5 h-px bg-accent" />
      <span className="font-mono-custom text-[11px] text-accent tracking-[0.12em] uppercase">
        {title}
      </span>
    </div>
  );
}
