import { ProjectCard } from "@/components/projectCard/ProjectCard";
import { ProjectsText } from "@/data/projects";

type TProps = {
  language: TLanguages;
};

export const ProjectsSection = ({ language }: TProps) => {
  const { subTitle, projects } = ProjectsText[language];

  return (
    <div>
      <p className="mb-8 max-w-3xl leading-relaxed text-foreground/75 lg:mb-10">
        {subTitle}
      </p>
      <div className="mx-auto w-full max-w-lg space-y-6 md:max-w-none lg:space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} language={language} />
        ))}
      </div>
    </div>
  );
};
