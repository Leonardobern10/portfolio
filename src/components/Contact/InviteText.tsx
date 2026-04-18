type InviteTextProps = {
    text: string;
};

export default function InviteText({ text }: InviteTextProps) {
    return (
        <p className="text-[#888580] text-[16px] leading-[1.8] mb-10">{text}</p>
    );
}
