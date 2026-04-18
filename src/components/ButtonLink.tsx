import { MEDIUM_URL } from '../data/articlesData';

type ButtonLinkProps = {
    title: string;
};

export default function ButtonLink({ title }: ButtonLinkProps) {
    return (
        <a
            href={MEDIUM_URL}
            target="_blank"
            rel="noreferrer"
            className="font-mono-custom text-[13px] text-[#f0ede8] border border-white/[0.15] px-8 py-3.5 rounded-sm inline-block hover:border-white transition-colors tracking-wide">
            {title}
        </a>
    );
}
