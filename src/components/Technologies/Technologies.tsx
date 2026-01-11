import { motion } from 'framer-motion';
import { SECTIONS } from '../../constants';
import Tech from './Tech';
import { techs } from '../../data/techs';
import TitleSectionAnimated from '../TitleSections/TitleSectionAnimated';

const styles = {
    container: 'border-b border-neutral-800 pb-24',
    techs: 'flex flex-wrap items-center justify-center gap-10 max-md:gap-5 w-full max-md:w-full max-lg:w-7/8 max-w-5xl mx-auto',
};

const techsAnimation = {
    whileInView: { opacity: 1, x: 0 },
    initial: { opacity: 0, x: -100 },
    transition: { duration: 1.5 },
};

const Technologies = () => {
    return (
        <div className={styles.container}>
            <TitleSectionAnimated titleSection={SECTIONS.TECH} />
            <motion.div {...techsAnimation} className={styles.techs}>
                {techs.map((el) => (
                    <Tech key={el.index} icon={el.icon} style={el.style} />
                ))}
            </motion.div>
        </div>
    );
};

export default Technologies;
