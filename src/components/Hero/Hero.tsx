import { heroAnimateVariants } from '../../animations';
import ButtonMain from '../ButtonMain';
import ButtonSecondary from '../ButtonSecondary';
import Terminal from './Terminal';
import Title from './Title';
import WordEmphasis from './WordEmphasis';
import { motion } from 'motion/react';

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background glow */}
            <div className="pointer-events-none absolute top-0 right-[-20%] w-[60%] h-full bg-[radial-gradient(ellipse_at_70%_50%,rgba(232,255,71,0.04)_0%,transparent_60%)]" />

            <div className="max-w-275 mx-auto px-10 w-full pt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left */}

                    <motion.div {...heroAnimateVariants}>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="block w-10 h-px bg-accent" />
                            <span className="font-mono-custom text-[12px] text-accent tracking-[0.12em] uppercase">
                                Software Engineer
                            </span>
                        </div>

                        <Title />

                        <p className="text-[19px] text-[#888580] leading-[1.7] mb-10 max-w-120">
                            Backend-focused engineer with hands-on experience in{' '}
                            <WordEmphasis word="microservices" />,{' '}
                            <WordEmphasis word="event-driven architecture" />,
                            and <WordEmphasis word="production-ready APIs" />—
                            using Node.js, TypeScript, and Java.
                        </p>

                        <div className="flex gap-4 flex-wrap">
                            <ButtonMain title="View Project" href="#projects" />
                            <ButtonSecondary
                                title="Get in touch"
                                href="#contact"
                            />
                        </div>
                    </motion.div>

                    {/* Right — Terminal */}
                    <Terminal />
                </div>
            </div>
        </section>
    );
}
