type WordEmphasisProps = {
    word: string;
};

export default function WordEmphasis({ word }: WordEmphasisProps) {
    return <strong className="text-[#f0ede8] font-normal">{word}</strong>;
}
