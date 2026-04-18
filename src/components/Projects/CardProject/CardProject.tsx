import type { Project } from '../../../types/ProjectType';
import DescriptionProject from '../DescriptionProject';
import LinkProject from '../LinkProject';
import ProjectNumber from '../ProjectNumber';
import StackContainerProjects from '../StackContainerProjects';

import TitleProject from '../TitleProject';
import TypeProject from '../TypeProject';

type CardProjectProps = {
    project: Project;
    delay: number;
};

export default function CardProject({ project, delay }: CardProjectProps) {
    return (
        <div
            className="bg-[#111113] p-10 hover:bg-[#18181c] transition-colors fade-in border-b border-r border-white/[0.06] last:border-r-0"
            style={{ transitionDelay: `${delay}ms` }}>
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
        </div>
    );
}
