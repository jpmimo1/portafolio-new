"use client";

import { ProjectsText } from "@/data/projects";
import { getProjectCover } from "@/utils/projects";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import classNames from "classnames";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import NextLink from "next/link";
import { FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";

type TProps = {
  project: TProject;
  language: TLanguages;
  variant?: "responsive" | "compact";
};

export const ProjectCard = ({
  project,
  language,
  variant = "responsive",
}: TProps) => {
  const {
    title,
    subtitle,
    category,
    description,
    contribution,
    featuredTechnologies,
    urlLive,
    urlProject,
    urlRepository,
  } = project;
  const labels = ProjectsText[language].labels;
  const cover = getProjectCover(project);
  const fullUrl = `/${language}/project/${urlProject}`;
  const prefersReducedMotion = useReducedMotion();
  const isResponsive = variant === "responsive";

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: "easeOut" }}
      className="@container"
    >
      <Card
        as="article"
        radius="lg"
        shadow="sm"
        className="w-full overflow-hidden border border-default-200 bg-content1 text-foreground"
      >
        <CardBody
          className={classNames("grid overflow-visible p-0", {
            "md:@2xl:grid-cols-3": cover,
            "lg:@4xl:grid-cols-2": cover && isResponsive,
          })}
        >
          {cover ? (
            <div
              className={classNames(
                "flex min-w-0 items-center justify-center border-b border-default-200 bg-primary/5 p-3 md:@2xl:border-b-0 md:@2xl:border-r md:@2xl:p-4",
                { "lg:@4xl:min-h-96 lg:@4xl:p-8": isResponsive },
              )}
            >
              <NextLink
                href={fullUrl}
                aria-label={`${labels.viewProject}: ${title}`}
                className={classNames(
                  "block w-full overflow-hidden rounded-large border border-default-200 bg-background shadow-sm outline-offset-4 focus-visible:outline-2 focus-visible:outline-focus",
                  { "lg:@4xl:shadow-lg": isResponsive },
                )}
              >
                <Image
                  src={cover.src}
                  alt={cover.alt}
                  width={1600}
                  height={1000}
                  sizes={
                    isResponsive
                      ? "(min-width: 1024px) 480px, (min-width: 768px) 240px, 100vw"
                      : "(min-width: 768px) 340px, 100vw"
                  }
                  className="h-40 w-full object-contain sm:h-44 md:@2xl:h-auto"
                />
              </NextLink>
            </div>
          ) : null}

          <div
            className={classNames("flex min-w-0 flex-col p-5 md:p-6", {
              "md:@2xl:col-span-2": cover,
              "lg:@4xl:p-8": isResponsive,
              "lg:@4xl:col-span-1": cover && isResponsive,
            })}
          >
            <p
              className={classNames(
                "text-xs font-semibold tracking-wide text-primary-700 dark:text-primary-600",
                { "lg:@4xl:uppercase lg:@4xl:tracking-widest": isResponsive },
              )}
            >
              {category}
            </p>
            <h3
              className={classNames("mt-1 text-2xl font-bold tracking-tight", {
                "lg:@4xl:mt-3 lg:@4xl:text-3xl": isResponsive,
              })}
            >
              <NextLink
                href={fullUrl}
                className="rounded-small outline-offset-4 transition-colors hover:text-primary-700 focus-visible:outline-2 focus-visible:outline-focus dark:hover:text-primary-600"
              >
                {title}
              </NextLink>
            </h3>
            {isResponsive ? (
              <p className="mt-2 hidden text-lg font-medium leading-snug text-foreground/85 lg:@4xl:block">
                {subtitle}
              </p>
            ) : null}
            <p
              className={classNames(
                "mt-2 text-sm leading-6 text-foreground/75",
                {
                  "lg:@4xl:mt-4 lg:@4xl:text-base lg:@4xl:leading-relaxed":
                    isResponsive,
                },
              )}
            >
              {description}
            </p>

            {isResponsive ? (
              <div className="mt-6 hidden border-l-2 border-primary pl-4 lg:@4xl:block">
                <p className="text-sm font-semibold">{labels.contribution}</p>
                <p className="mt-1 text-sm leading-relaxed text-foreground/75">
                  {contribution}
                </p>
              </div>
            ) : null}

            <ul
              aria-label={labels.technologies}
              className={classNames("mt-3 flex flex-wrap gap-2", {
                "lg:@4xl:mt-6": isResponsive,
              })}
            >
              {featuredTechnologies.map((technology) => (
                <li key={technology}>
                  <Chip
                    size="sm"
                    radius="sm"
                    variant="flat"
                    className="bg-default-100 text-foreground/80"
                    classNames={{ content: "font-medium" }}
                  >
                    {technology}
                  </Chip>
                </li>
              ))}
            </ul>

            <div
              className={classNames(
                "mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-4",
                { "lg:@4xl:gap-y-4 lg:@4xl:pt-8": isResponsive },
              )}
            >
              <Button
                as={NextLink}
                href={fullUrl}
                color="primary"
                radius="sm"
                endContent={<FiArrowRight aria-hidden="true" />}
                className="h-auto min-h-11 whitespace-normal bg-primary-700 py-3 font-semibold text-primary-foreground dark:bg-primary-200"
              >
                {labels.viewProject}
              </Button>
              {urlLive ? (
                <Link
                  href={urlLive}
                  isExternal
                  showAnchorIcon
                  anchorIcon={<FiExternalLink aria-hidden="true" />}
                  color="foreground"
                  size="sm"
                  underline="hover"
                  className="min-h-11 gap-1 font-semibold text-foreground/75"
                >
                  {labels.openApp}
                </Link>
              ) : null}
              {urlRepository ? (
                <Link
                  href={urlRepository}
                  isExternal
                  showAnchorIcon
                  anchorIcon={<FiGithub aria-hidden="true" />}
                  color="foreground"
                  size="sm"
                  underline="hover"
                  className="min-h-11 gap-1 font-semibold text-foreground/75"
                >
                  {labels.sourceCode}
                </Link>
              ) : null}
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};
