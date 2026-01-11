import { SECTIONS } from '../../constants';
import useLanguageStore from '../../store/useLanguage';
import TitleSection from '../TitleSections/TitleSection';
import AboutImg from './AboutImg';
import AboutText from './AboutText';

const styles = {
    container: 'border-b border-neutral-900 pb-4',
    content: 'flex flex-wrap gap-y-10',
};

const About = function () {
    const { language } = useLanguageStore();
    const titleSection = SECTIONS.ABOUT[language].split(' ');
    return (
        <div className={styles.container}>
            <TitleSection titleSection={titleSection} />
            <div className={styles.content}>
                <AboutImg />
                <AboutText />
            </div>
        </div>
    );
};
export default About;
