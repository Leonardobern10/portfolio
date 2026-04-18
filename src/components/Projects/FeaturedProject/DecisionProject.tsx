type DecisionProjectProps = {
    decision: string;
};

export default function DecisionProject({ decision }: DecisionProjectProps) {
    return (
        <div className="border-l-2 border-accent pl-5 py-1 mb-5 bg-[#0a0a0b]">
            <p className="font-mono-custom text-[10px] text-accent uppercase tracking-widest mb-2">
                Key decision
            </p>
            <p className="text-[#888580] text-[13px] leading-[1.7]">
                {decision}
            </p>
        </div>
    );
}
