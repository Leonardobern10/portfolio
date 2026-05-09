import Nav from './components/NavBar/Nav';
import About from './components/About/About';
import Articles from './components/Articles/Articles';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import { useApp } from './hooks/useApp';

const styles = {
    divisor: 'h-px bg-white/6',
    container: 'bg-[#0a0a0b] text-[#f0ede8] font-sans overflow-x-hidden',
};

export default function App() {
    const { articles } = useApp();

    return (
        <main className={styles.container}>
            <Nav />
            <Hero />
            <div className={styles.divisor} />
            <About />
            <div className={styles.divisor} />
            <Projects />
            <div className={styles.divisor} />
            <Articles articles={articles!} />
            <div className={styles.divisor} />
            <Contact />
            <Footer />
        </main>
    );
}
