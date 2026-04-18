import NavBarItem from './NavBarItem';

type NavBarContainerProps = {
    items: string[];
};

export default function NavBarContainer({ items }: NavBarContainerProps) {
    return (
        <>
            <div className="hidden md:flex gap-8">
                {items.map((item) => (
                    <NavBarItem item={item} key={item} />
                ))}
            </div>
        </>
    );
}
