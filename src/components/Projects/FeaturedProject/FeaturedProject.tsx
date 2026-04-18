import type { Project } from '../../../types/ProjectType';
import ArchitectureExample from './AchitectureExample';
import DecisionProject from './DecisionProject';
import DescriptionProject from '../DescriptionProject';
import LinkProject from '../LinkProject';
import ProjectNumber from '../ProjectNumber';

import TitleProject from '../TitleProject';
import TypeProject from '../TypeProject';
import StackContainerProjects from '../StackContainerProjects';

type FeaturedProjectProps = {
    project: Project;
};

export default function FeaturedProject({ project }: FeaturedProjectProps) {
    return (
        <div className="bg-[#111113] p-10 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 border-b border-white/6 fade-in">
            <div>
                <div className="flex justify-between items-center mb-5">
                    <ProjectNumber num={project.num} />
                    <TypeProject type={project.type} />
                </div>
                <TitleProject title={project.title} />
                <DescriptionProject desc={project.desc} />
                {project.decision && (
                    <DecisionProject decision={project.decision} />
                )}
                <StackContainerProjects stacks={project.stack} />
                <LinkProject text="Github" link={project.github} />
            </div>

            {/* ASCII Architecture */}
            <ArchitectureExample />
        </div>
    );
}
