export default function ButtonLink({ href, title }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 rounded bg-pink-900 px-4 md:px-4 py-2 md:py-2 text-white text-sm md:text-md font-semibold hover:bg-neutral-700 hover:text-pink-900 transition"
        >
            {title}
        </a>
    );
}
