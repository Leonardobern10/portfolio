import StackItemProject from './FeaturedProject/StackItemProject';

type StackContainerProjectsProps = {
    stacks: string[];
};

export default function StackContainerProjects({
    stacks,
}: StackContainerProjectsProps) {
    return (
        <div className="flex flex-wrap gap-1.5 mb-5">
            {stacks.map((s) => (
                <StackItemProject stack={s} key={s} />
            ))}
        </div>
    );
}
