type TextSliceProps = {
  text: string;
};

export default function TextSlice({ text }: TextSliceProps) {
  return <p className="text-[#888580] leading-[1.85] text-[16px]">{text}</p>;
}
