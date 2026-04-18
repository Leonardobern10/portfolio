export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute top-0 right-[-20%] w-[60%] h-full bg-[radial-gradient(ellipse_at_70%_50%,rgba(232,255,71,0.04)_0%,transparent_60%)]" />

            <div className="max-w-[1100px] mx-auto px-10 w-full pt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left */}
                    <div className="fade-in">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="block w-10 h-px bg-accent" />
                            <span className="font-mono-custom text-[12px] text-accent tracking-[0.12em] uppercase">
                                Software Engineer
                            </span>
                        </div>

                        <h1 className="font-serif-custom text-4xl md:text-[4rem] font-light leading-[1.05] tracking-[-0.02em] mb-4">
                            Building systems
                            <br />
                            that <em className="text-accent italic">scale</em>
                            <br />
                            and last.
                        </h1>

                        <p className="text-[19px] text-[#888580] leading-[1.7] mb-10 max-w-[480px]">
                            Backend-focused engineer with hands-on experience in{' '}
                            <strong className="text-[#f0ede8] font-normal">
                                microservices
                            </strong>
                            ,{' '}
                            <strong className="text-[#f0ede8] font-normal">
                                event-driven architecture
                            </strong>
                            , and{' '}
                            <strong className="text-[#f0ede8] font-normal">
                                production-ready APIs
                            </strong>{' '}
                            — using Node.js, TypeScript, and Java.
                        </p>

                        <div className="flex gap-4 flex-wrap">
                            <a
                                href="#projects"
                                className="font-mono-custom text-[13px] text-[#0a0a0b] bg-accent px-8 py-3.5 rounded-sm tracking-wide hover:opacity-85 transition-opacity"
                            >
                                View Projects
                            </a>
                            <a
                                href="#contact"
                                className="font-mono-custom text-[13px] text-[#f0ede8] border border-white/[0.15] px-8 py-3.5 rounded-sm tracking-wide hover:border-white transition-colors"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>

                    {/* Right — Terminal */}
                    <div className="fade-in [transition-delay:150ms]">
                        <div className="bg-[#111113] border border-white/[0.09] rounded-md p-6 font-mono-custom text-[13px] leading-[1.9]">
                            <div className="flex gap-1.5 mb-5 items-center">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                            </div>

                            <div>
                                <span className="text-[#555250]">~/taskly</span>{' '}
                                <span className="text-accent">$</span>{' '}
                                <span>pnpm turbo run dev</span>
                            </div>
                            {[
                                ['Tasks service', 'ready', ':3002'],
                                ['Auth service', 'ready', ':3001'],
                                ['Notifications', 'ready', ':3004'],
                                ['API Gateway', 'ready', ':3000'],
                                ['RabbitMQ', 'connected', ''],
                            ].map(([name, status, port]) => (
                                <div key={name} className="text-[#555250]">
                                    {'  '}• {name.padEnd(16)}{' '}
                                    <span className="text-[#28c840]">
                                        {status}
                                    </span>{' '}
                                    {port}
                                </div>
                            ))}
                            <div className="mt-2">
                                <span className="text-accent">$</span>{' '}
                                <span>curl /api/tasks/health</span>
                            </div>
                            <div className="text-[#47ffd8]">
                                {'{ '}
                                <span className="text-[#f0ede8]">"status"</span>
                                : "ok",{' '}
                                <span className="text-[#f0ede8]">
                                    "services"
                                </span>
                                : 4{' }'}
                            </div>
                        </div>

                        <div className="flex gap-2 flex-wrap mt-4">
                            {[
                                'Open to work',
                                'Remote friendly',
                                'Brazil · UTC-3',
                            ].map((b, i) => (
                                <span
                                    key={b}
                                    className={`font-mono-custom text-[11px] px-3 py-1.5 rounded-sm border ${
                                        i === 0
                                            ? 'border-accent text-accent'
                                            : 'border-white/[0.09] text-[#888580]'
                                    }`}
                                >
                                    {b}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
