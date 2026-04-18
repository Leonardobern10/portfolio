type StackItemProjectProps = {
    stack: string;
};

export default function StackItemProject({ stack }: StackItemProjectProps) {
    return (
        <span className="font-mono-custom text-[11px] px-2 py-1 bg-[#18181c] text-[#888580] rounded-sm">
            {stack}
        </span>
    );
}
