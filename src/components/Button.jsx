export default function Button({ text, onClick }) {
    <button
        onClick={() => onClick()}
        className="w-45 border-2 inline-block mt-4 rounded bg-pink-900 px-4 md:px-4 
        py-2 md:py-2 text-white text-sm md:text-md font-semibold hover:bg-neutral-700
         hover:text-pink-900 transition"
    >
        {text}
    </button>;
}
