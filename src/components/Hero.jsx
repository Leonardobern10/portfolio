import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/Eu_RJ.jpg';
import { motion } from 'framer-motion';
import useLanguageStore from '../store/useLanguage';

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

export default function Hero() {
    const { language } = useLanguageStore();
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pd-16 text-6xl font-thin tracking-tight 
            lg:mt-16 lg:text-8xl my-10"
                        >
                            Leonardo Bernardo
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-linear-to-r from-pink-300 via-slate-500 
            to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
                        >
                            FullStack Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-8 font-light text-body text-justify"
                        >
                            {HERO_CONTENT[language]}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <motion.img
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilePic}
                            alt="Image profile demo"
                            className="rounded-2xl mask-[radial-gradient(circle,black_20%,transparent_70%)]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
