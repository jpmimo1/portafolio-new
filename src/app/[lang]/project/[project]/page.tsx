import { BackgroundClear } from "@/components/BackgroundClear";
import { ProjectCard } from "@/components/projectCard/ProjectCard";
import { MenuItems } from "@/data/menu";
import { ProjectsText } from "@/data/projects";
import { getProjectCover } from "@/utils/projects";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import type { Metadata } from "next";
import NextLink from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";
import { PhotoGallery } from "./components/PhotoGallery";

export const dynamicParams = false;

const DOMAIN_URL = process.env.DOMAIN_URL || "https://jeanpaulflores.com";

type TParams = { lang: TLanguages; project: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<TParams>;
}): Promise<Metadata> {
  const { lang, project } = await params;
  const projectData = ProjectsText[lang]?.projects.find(
    ({ urlProject }) => urlProject === project,
  );

  if (!projectData) return {};

  const cover = getProjectCover(projectData);
  const url = new URL(`/${lang}/project/${projectData.urlProject}`, DOMAIN_URL);
  const images = cover ? [{ url: cover.src, alt: cover.alt }] : [];

  return {
    metadataBase: new URL(DOMAIN_URL),
    title: projectData.seo.title,
    description: projectData.seo.description,
    keywords: projectData.keyWords,
    alternates: { canonical: url },
    openGraph: {
      title: projectData.seo.title,
      description: projectData.seo.description,
      url,
      siteName: "Jean Paul Flores Portfolio",
      locale: lang === "es" ? "es_ES" : "en_US",
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: projectData.seo.title,
      description: projectData.seo.description,
      images,
    },
  };
}

export async function generateStaticParams() {
  return (Object.keys(ProjectsText) as TLanguages[]).flatMap((lang) =>
    ProjectsText[lang].projects.map(({ urlProject }) => ({
      lang,
      project: urlProject,
    })),
  );
}

export default async function Project({
  params,
}: {
  params: Promise<TParams>;
}) {
  const { lang, project } = await params;
  const content = ProjectsText[lang];
  const projectData = content?.projects.find(
    ({ urlProject }) => urlProject === project,
  );

  if (!projectData) notFound();

  const { labels } = content;
  const {
    id,
    title,
    subtitle,
    category,
    description,
    role,
    contribution,
    technologies,
    details,
    gallery,
    coverImageId,
    urlLive,
    urlRepository,
  } = projectData;
  const projectsAnchor = MenuItems[lang].find(
    ({ key }) => key === "projects-sec",
  )?.url;
  const projectsUrl = `/${lang}/${projectsAnchor || ""}`;
  const relatedProjects = content.projects
    .filter(({ id: projectId }) => projectId !== id)
    .slice(0, 3);

  return (
    <>
      <BackgroundClear />
      <div className="section-container px-4 pb-20 pt-8">
        <Link
          as={NextLink}
          href={projectsUrl}
          size="sm"
          underline="hover"
          className="min-h-11 gap-2 font-medium text-primary-700 dark:text-primary-600"
        >
          <FiArrowLeft aria-hidden="true" />
          {labels.backToProjects}
        </Link>

        <header className="grid gap-8 pb-10 pt-8 lg:grid-cols-4 lg:items-end">
          <div className="min-w-0 lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-700 dark:text-primary-600">
              {category}
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-4 text-xl font-medium text-foreground/85 sm:text-2xl">
              {subtitle}
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-foreground/75">
              {description}
            </p>
          </div>

          <div className="min-w-0 lg:border-l lg:border-default-200 lg:pl-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground/65">
              {labels.role}
            </p>
            <p className="mt-2 font-medium text-foreground">{role}</p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              {urlLive ? (
                <Button
                  as={NextLink}
                  href={urlLive}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  radius="sm"
                  endContent={<FiExternalLink aria-hidden="true" />}
                  className="h-auto min-h-11 whitespace-normal bg-primary-700 py-3 font-semibold text-primary-foreground dark:bg-primary-200"
                >
                  {labels.openApp}
                </Button>
              ) : null}
              {urlRepository ? (
                <Link
                  href={urlRepository}
                  isExternal
                  showAnchorIcon
                  anchorIcon={<FiGithub aria-hidden="true" />}
                  size="sm"
                  underline="hover"
                  className="min-h-11 gap-2 font-semibold text-foreground/75"
                >
                  {labels.sourceCode}
                </Link>
              ) : null}
            </div>
          </div>
        </header>

        <PhotoGallery
          key={`${lang}-${id}`}
          gallery={gallery}
          coverImageId={coverImageId}
          projectTitle={title}
          labels={labels}
        />

        <ul
          aria-label={labels.technologies}
          className="mt-8 flex flex-wrap gap-2"
        >
          {technologies.map((technology) => (
            <li key={technology}>
              <Chip
                size="md"
                radius="sm"
                variant="bordered"
                className="border-default-200 bg-content1 text-foreground/85"
              >
                {technology}
              </Chip>
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-10 border-t border-default-200 pt-10 md:grid-cols-2">
          <section aria-labelledby="project-overview">
            <h2
              id="project-overview"
              className="text-2xl font-bold tracking-tight"
            >
              {labels.overview}
            </h2>
            <p className="mt-4 leading-7 text-foreground/75">
              {details.overview}
            </p>
          </section>
          <section aria-labelledby="project-problem">
            <h2
              id="project-problem"
              className="text-2xl font-bold tracking-tight"
            >
              {labels.problem}
            </h2>
            <p className="mt-4 leading-7 text-foreground/75">
              {details.problem}
            </p>
          </section>
        </div>

        <section
          aria-labelledby="project-responsibilities"
          className="mt-12 rounded-large border border-primary/20 bg-primary-900 p-6 text-primary-foreground sm:p-10 dark:bg-primary-50"
        >
          <div className="grid gap-7 md:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-100 dark:text-primary-700">
                {labels.contribution}
              </p>
              <h2
                id="project-responsibilities"
                className="mt-3 text-2xl font-bold"
              >
                {labels.responsibilities}
              </h2>
              <p className="mt-4 text-sm leading-6 text-primary-foreground/80">
                {contribution}
              </p>
            </div>
            <ul className="grid gap-5 text-sm leading-6 sm:grid-cols-2 md:col-span-2">
              {details.responsibilities.map((responsibility) => (
                <li
                  key={responsibility}
                  className="border-l border-primary pl-4"
                >
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="project-features" className="mt-14">
          <h2
            id="project-features"
            className="text-2xl font-bold tracking-tight"
          >
            {labels.features}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {details.features.map((feature) => (
              <Card
                as="article"
                key={feature.title}
                radius="lg"
                shadow="none"
                className="border border-default-200 bg-content1"
              >
                <CardBody className="p-6">
                  <h3 className="font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-foreground/75">
                    {feature.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        <section aria-labelledby="project-decisions" className="mt-14">
          <h2
            id="project-decisions"
            className="text-2xl font-bold tracking-tight"
          >
            {labels.technicalDecisions}
          </h2>
          <div className="mt-6 divide-y divide-default-200 border-y border-default-200">
            {details.technicalDecisions.map((decision) => (
              <article
                key={decision.title}
                className="grid gap-3 py-6 md:grid-cols-4 md:gap-8"
              >
                <h3 className="font-semibold">{decision.title}</h3>
                <p className="leading-7 text-foreground/75 md:col-span-3">
                  {decision.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="project-deployment"
          className="mt-12 max-w-3xl"
        >
          <h2
            id="project-deployment"
            className="text-2xl font-bold tracking-tight"
          >
            {labels.deployment}
          </h2>
          <p className="mt-4 leading-7 text-foreground/75">
            {details.deployment}
          </p>
        </section>

        {relatedProjects.length > 0 ? (
          <section
            aria-labelledby="related-projects"
            className="mt-14 border-t border-default-200 pt-10"
          >
            <h2
              id="related-projects"
              className="text-2xl font-bold tracking-tight"
            >
              {labels.relatedProjects}
            </h2>
            <div className="mx-auto mt-6 w-full max-w-lg space-y-6 md:max-w-3xl">
              {relatedProjects.map((relatedProject) => (
                <ProjectCard
                  key={relatedProject.id}
                  project={relatedProject}
                  language={lang}
                  variant="compact"
                />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </>
  );
}
