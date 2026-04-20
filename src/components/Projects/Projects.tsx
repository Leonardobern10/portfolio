import { containerListAnimationVariants } from '../../animations';
import { projects } from '../../data/projectsData';
import CardProject from './CardProject/CardProject';
import HeaderCardProject from './CardProject/HeaderCardProject';
import FeaturedProject from './FeaturedProject/FeaturedProject';
import { motion } from 'motion/react';

export default function Projects() {
    const featured = projects.find((p) => p.featured)!;
    const rest = projects.filter((p) => !p.featured);

    return (
        <section id="projects" className="py-28 bg-[#111113]">
            <HeaderCardProject title="Projects" desc="Things I've built." />

            <div className="max-w-275 mx-auto px-10">
                {/* Featured */}
                <FeaturedProject project={featured} />

                {/* Grid */}
                <motion.div
                    variants={containerListAnimationVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-2 border-l border-white/6">
                    {rest.map((p) => (
                        <CardProject key={p.num} project={p} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
