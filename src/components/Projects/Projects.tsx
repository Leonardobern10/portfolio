import { projects } from '../../data/projectsData';
import DescriptionSection from '../DescriptionSection';
import TitleSection from '../TitleSection';
import CardProject from './CardProject/CardProject';
import HeaderCardProject from './CardProject/HeaderCardProject';
import FeaturedProject from './FeaturedProject/FeaturedProject';

export default function Projects() {
    const featured = projects.find((p) => p.featured)!;
    const rest = projects.filter((p) => !p.featured);

    return (
        <section id="projects" className="py-28 bg-[#111113]">
            <HeaderCardProject title="Projects" desc="Things I've built." />

            <div className="max-w-[1100px] mx-auto px-10">
                {/* Featured */}
                <FeaturedProject project={featured} />

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 border-l border-white/[0.06]">
                    {rest.map((p, i) => (
                        <CardProject key={p.num} project={p} delay={i * 50} />
                    ))}
                </div>
            </div>
        </section>
    );
}
