
import { useEffect } from "react";
import Nav from "./components/NavBar/Nav";
import About from "./components/About/About";
import Articles from "./components/Articles/Articles";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";

export default function App() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="bg-[#0a0a0b] text-[#f0ede8] font-sans overflow-x-hidden">
      <Nav />
      <Hero />
      <div className="h-px bg-white/[0.06]" />
      <About />
      <div className="h-px bg-white/[0.06]" />
      <Projects />
      <div className="h-px bg-white/[0.06]" />
      <Articles />
      <div className="h-px bg-white/[0.06]" />
      <Contact />
      <Footer />
    </main>
  );
}
