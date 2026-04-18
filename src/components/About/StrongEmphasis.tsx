type StrongEmphasisProps = {
  text: string;
};

export default function StrongEmphasis({ text }: StrongEmphasisProps) {
  return <strong className="text-[#f0ede8] font-normal">{text}</strong>;
}
