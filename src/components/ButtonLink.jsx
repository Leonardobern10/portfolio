export default function ButtonLink({ href, title }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block tracking-wide mt-4 rounded bg-pink-900/50 px-4 md:px-4 py-2 md:py-2 text-white text-2sm md:text-md font-normal hover:bg-neutral-800/80 hover:text-pink-600 hover:border-pink-600 transition font-rubik"
        >
            {title}
        </a>
    );
}
