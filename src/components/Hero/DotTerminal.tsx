type DotTerminalProps = {
    color: string;
};

export default function DotTerminal({ color }: DotTerminalProps) {
    return <span className={`w-2.5 h-2.5 rounded-full bg-[${color}]`} />;
}
