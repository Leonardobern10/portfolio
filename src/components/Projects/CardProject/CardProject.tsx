import type { Project } from '../../../types/ProjectType';
import DescriptionProject from '../DescriptionProject';
import LinkProject from '../LinkProject';
import ProjectNumber from '../ProjectNumber';
import StackContainerProjects from '../StackContainerProjects';
import { motion } from 'motion/react';
import TitleProject from '../TitleProject';
import TypeProject from '../TypeProject';
import { itemListAnimationVariants } from '../../../animations';

type CardProjectProps = {
    project: Project;
};

export default function CardProject({ project }: CardProjectProps) {
    return (
        <motion.div
            className="bg-[#111113] p-10 hover:bg-[#18181c] transition-colors border-b border-r border-white/6 last:border-r-0"
            variants={itemListAnimationVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-100px' }}>
            <div className="flex justify-between items-center mb-5">
                <ProjectNumber num={project.num} />
                <TypeProject type={project.type} />
            </div>
            <TitleProject title={project.title} />
            <DescriptionProject desc={project.desc} />
            <StackContainerProjects stacks={project.stack} />
            <LinkProject
                text="Github"
                link={project.github}
                live={project.live}
            />
        </motion.div>
    );
}
