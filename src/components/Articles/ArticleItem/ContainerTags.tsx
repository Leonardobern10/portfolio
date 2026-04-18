import Tag from './Tag';

type ContainerTagsProps = {
    tags: string[];
};

export default function ContainerTags({ tags }: ContainerTagsProps) {
    return (
        <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag) => (
                <Tag key={tag} tagName={tag} />
            ))}
        </div>
    );
}
