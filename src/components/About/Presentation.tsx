import PhraseEmphasis from './PhraseEmphasis';

export default function Presentation() {
    return (
        <div className="space-y-3 mb-10">
            {[
                <>
                    I'm a software engineer focused on
                    <PhraseEmphasis text="backend systems and distributed architecture" />
                    — currently seeking my first professional role.
                </>,
                <>
                    Over the past year I've built two production-grade systems
                    from scratch: a
                    <PhraseEmphasis text="collaborative task platform" />
                    with full microservices architecture (NestJS, RabbitMQ,
                    WebSockets) and a
                    <PhraseEmphasis text="mobile medication tracker" />
                    with real domain logic and offline-first design.
                </>,
                <>
                    I care about making
                    <strong className="text-[#f0ede8] font-normal">
                        intentional technical decisions
                    </strong>
                    and being able to explain the reasoning behind each one. I
                    write regularly about software engineering on Medium —
                    covering design patterns, clean architecture, and networking
                    fundamentals.
                </>,
                <>
                    I'm open to backend, fullstack, or software engineering
                    roles where I can contribute from day one and grow fast.
                </>,
            ].map((text, i) => (
                <p
                    key={i}
                    className="text-[#888580] leading-[1.85] text-[16px]">
                    {text}
                </p>
            ))}
        </div>
    );
}
