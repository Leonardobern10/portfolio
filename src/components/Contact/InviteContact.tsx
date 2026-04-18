type InviteContactProps = {
    beforeBreak: string;
    afterBreak: string;
    emphasis: string;
};

export default function InviteContact({
    beforeBreak,
    afterBreak,
    emphasis,
}: InviteContactProps) {
    return (
        <h2 className="font-serif-custom text-5xl md:text-[4rem] font-light tracking-[-0.03em] leading-[1.05] mb-6">
            {beforeBreak}
            <br />
            {afterBreak}{' '}
            <em className="not-italic text-[#47ffd8]">{emphasis}</em>
        </h2>
    );
}
