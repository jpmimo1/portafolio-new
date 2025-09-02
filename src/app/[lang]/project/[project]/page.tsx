import { ProjectsText } from "@/data/projects";
import { redirect } from "next/navigation";
import { BackgroundClear } from "@/components/BackgroundClear";
import { TechnologiesArea } from "@/components/projectCard/TechnologiesArea";
import { ProjectCard } from "@/components/projectCard/ProjectCard";
import { Button } from "@heroui/button";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";
import { PhotoGallery } from "./components/PhotoGallery";
export const dynamicParams = false;

const technologiesTitle: { [key in TLanguages]: string } = {
  es: "Tecnologías utilizadas",
  en: "Technologies used",
};

const moreProjectsTitle: { [key in TLanguages]: string } = {
  es: "Más Proyectos",
  en: "More Projects",
};

const liveDemo: { [key in TLanguages]: string } = {
  es: "Ver en Vivo",
  en: "Live Demo",
};

const viewGitHub: { [key in TLanguages]: string } = {
  es: "Ver en GitHub",
  en: "View on GitHub",
};

type TParams = { lang: TLanguages; project: string };

export async function generateStaticParams() {
  const languages = Object.keys(ProjectsText) as TLanguages[];

  const params: TParams[] = languages.reduce<TParams[]>(
    (prev, lang): TParams[] => {
      const projectLang = ProjectsText[lang].projects.map(({ urlProject }) => ({
        lang,
        project: urlProject,
      }));

      return [...prev, ...projectLang];
    },
    []
  );

  return params;
}

export default async function Project({
  params,
}: {
  params: Promise<TParams>;
}) {
  const { lang, project } = await params;

  const projectData = ProjectsText[lang].projects.find(
    ({ urlProject }) => urlProject === project
  );

  if (!projectData) {
    redirect("/");
  }

  const {
    id,
    title,
    urlLive,
    urlRepository,
    descriptionLong,
    technologies,
    gallery,
  } = projectData;

  const otherProjects = ProjectsText[lang].projects
    .filter(({ id: projectId }) => projectId !== id)
    .slice(0, 3);

  return (
    <main>
      <BackgroundClear />
      <div className="flex flex-col section-container px-4 py-6">
        <div className="mb-8">
          <h1 className="text-xl lg:text-2xl text-primary dark:text-primary-500 mb-6 font-semibold">
            {title}
          </h1>
          <PhotoGallery gallery={gallery} />
          {/* <EmblaCarousel /> */}
          <p>{descriptionLong}</p>
        </div>
        <div className="flex gap-3 mb-8">
          <Button
            as={Link}
            href={urlLive}
            radius="sm"
            color="secondary"
            variant="solid"
            size="md"
            target="_blank"
            endContent={<FaLink className="text-2xl" />}
          >
            {liveDemo[lang]}
          </Button>
          <Button
            as={Link}
            href={urlRepository}
            radius="sm"
            color="primary"
            variant="solid"
            size="md"
            target="_blank"
            endContent={<FaGithub className="text-2xl" />}
          >
            {viewGitHub[lang]}
          </Button>
        </div>
        <div className="mb-8">
          <h3 className="text-secondary dark:text-secondary-500 text-lg font-semibold mb-2">
            {technologiesTitle[lang]}
          </h3>
          <div>
            <TechnologiesArea technologies={technologies} size="md" />
          </div>
        </div>
        {otherProjects.length > 0 ? (
          <div>
            <h3 className="text-secondary dark:text-secondary-500 text-lg font-semibold mb-4">
              {moreProjectsTitle[lang]}
            </h3>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {otherProjects.map((project) => {
                  return (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      language={lang}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}
