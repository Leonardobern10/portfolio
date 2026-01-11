import About from './components/About/About';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Technologies from './components/Technologies/Technologies';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact';
import Articles from './components/Articles';
import { useState } from 'react';

const styles = {
    container:
        'overflow-x-hidden text-neutral-300 scroll-smooth antialiased selection:bg-cyan-300 selection:text-cyan-900',
    div1: 'fixed top-0 -z-10 h-full w-full',
    div2: 'absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%, rgba(120,119,198,0.3),rgba(255,255,255,0))]',
    body: 'container mx-auto px-8',
};

function App() {
    const [modal, setModal] = useState<boolean>(false);

    return (
        <div className={styles.container}>
            <div className={styles.div1}>
                <div className={styles.div2}></div>
            </div>
            <div className={styles.body}>
                <NavBar />
                <Hero />
                <About />
                <Technologies />
                <Projects />
                <Articles />
                <Contact />
            </div>
        </div>
    );
}

export default App;
