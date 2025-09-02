import { ProjectCard } from "@/components/projectCard/ProjectCard";
import { ProjectsText } from "@/data/projects";
import { Button } from "@heroui/button";
import Link from "next/link";
import { useMemo } from "react";
import { FaLaptopCode } from "react-icons/fa";

type TProps = {
  language: TLanguages;
};

const seeMoreLabel: { [lang in TLanguages]: string } = {
  es: "Ver más proyectos",
  en: "See more proyects",
};

export const ProjectsSection = ({ language }: TProps) => {
  const { subTitle, projects } = useMemo(() => {
    return ProjectsText[language];
  }, [language]);

  const projectsShow = useMemo(() => {
    return projects.slice(0, 5);
  }, [projects]);

  return (
    <div>
      <p className="mb-6">{subTitle}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {projectsShow.map((project, i) => {
          return <ProjectCard key={i} project={project} language={language} />;
        })}
      </div>
      {projects.length > projectsShow.length ? (
        <div className="flex justify-end">
          <Button
            href=""
            as={Link}
            startContent={<FaLaptopCode />}
            color="primary"
          >
            {seeMoreLabel[language]}
          </Button>
        </div>
      ) : null}
    </div>
  );
};
