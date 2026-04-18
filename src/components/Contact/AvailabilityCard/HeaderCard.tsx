import PulseDot from '../../PulseDot';

type HeaderCardProps = {
    title: string;
};

export default function HeaderCard({ title }: HeaderCardProps) {
    return (
        <div className="flex items-center gap-2 mb-6">
            <PulseDot />
            <span className="font-mono-custom text-[12px] text-accent uppercase tracking-[0.08em]">
                {title}
            </span>
        </div>
    );
}
