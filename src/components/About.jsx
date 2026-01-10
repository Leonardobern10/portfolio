import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT_CONTENT, SECTIONS } from '../constants';
import { motion } from 'framer-motion';
import useLanguageStore from '../store/useLanguage';
import TitleSection from './TitleSection';

const styles = {};

const About = function () {
    const { language } = useLanguageStore();
    const titleSection = SECTIONS.ABOUT[language].split(' ');
    return (
        <div className="border-b border-neutral-900 pb-4">
            <TitleSection titleSection={titleSection} />
            <div className="flex flex-wrap gap-y-10">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8 h-full"
                >
                    <div className="flex items-center justify-center">
                        <img
                            className="rounded-3xl"
                            src={aboutImg}
                            alt="about"
                        />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8 h-full"
                >
                    <div className="flex-row justify-center items-center">
                        <p className="text-lg font-light text-justify w-full md:px-12">
                            {ABOUT_TEXT_CONTENT[language]}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
export default About;
