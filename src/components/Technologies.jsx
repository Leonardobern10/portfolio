import { RiReactjsLine } from 'react-icons/ri';
import { FaVuejs } from 'react-icons/fa';
import { SiSpring } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { FaAngular } from 'react-icons/fa';
import { RiJavascriptLine } from 'react-icons/ri';
import { SiJest } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaJava } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { motion } from 'framer-motion';
import { SECTIONS } from '../constants';

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        },
    },
});

const Technologies = ({ language }) => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl"
            >
                {SECTIONS.TECH[language]}
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-10 max-md:gap-5 w-full max-md:w-full max-lg:w-7/8 max-w-5xl mx-auto"
            >
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="tech-container"
                >
                    <div>
                        <FaJava className="tech text-red-800" />
                    </div>
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="tech-container"
                >
                    <RiReactjsLine className="tech text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="tech-container"
                >
                    <BiLogoTypescript className="tech max-md:text-2xl text-blue-800" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="tech-container"
                >
                    <FaVuejs className="tech max-md:text-2xl text-green-800" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="tech-container"
                >
                    <FaAngular className="tech max-md:text-2xl text-red-800" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="tech-container"
                >
                    <FaGitAlt className="tech max-md:text-2xl text-orange-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="tech-container"
                >
                    <SiMysql className="tech max-md:text-2xl text-gray-600" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="tech-container"
                >
                    <SiSpring className="tech max-md:text-2xl text-green-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="tech-container"
                >
                    <RiJavascriptLine className="tech max-md:text-2xl text-yellow-300" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="tech-container"
                >
                    <SiJest className="tech max-md:text-2xl text-red-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="tech-container"
                >
                    <SiMongodb className="tech max-md:text-2xl text-green-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="tech-container"
                >
                    <FaNodeJs className="tech max-md:text-2xl text-green-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="tech-container"
                >
                    <BiLogoPostgresql className="tech max-md:text-2xl text-sky-700" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;
