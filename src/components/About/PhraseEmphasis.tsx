type PhraseEmphasisProps = {
    text: string;
};

export default function PhraseEmphasis({ text }: PhraseEmphasisProps) {
    return (
        <strong className="text-[#f0ede8] font-normal">
            {' ' + text + ' '}
        </strong>
    );
}
