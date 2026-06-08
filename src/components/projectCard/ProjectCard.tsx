"use client";
import { Card } from "@heroui/card";

import { Button } from "@heroui/button";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
import { motion } from "framer-motion";
import { TechnologiesArea } from "./TechnologiesArea";

const seeMore: { [key in TLanguages]: string } = {
  es: "Ver más detalles",
  en: "See more details",
};

type TProps = {
  project: TProject;
  language: TLanguages;
};

export const ProjectCard = ({ project, language }: TProps) => {
  const {
    title,
    description,
    mainImage,
    technologies,
    urlLive,
    urlProject,
    urlRepository,
  } = project;

  const fullUrl = `/${language}/project/${urlProject}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card
        radius="sm"
        className="bg-white/80 dark:bg-content1 max-w-[450px] mx-auto shadow-sm hover:shadow-lg transition-all border border-default-300"
        shadow="sm"
      >
        <NextLink href={fullUrl}>
          <Image
            alt={title}
            src={mainImage}
            width={700}
            height={700}
            className="aspect-[14/9] object-cover w-full"
          />
        </NextLink>
        <div className="p-3 pb-4 border-t border-default-200">
          <NextLink href={fullUrl}>
            <h4 className="text-foreground hover:text-primary font-semibold mb-2 transition-colors">{title}</h4>
          </NextLink>
          <p className="text-sm/snug text-foreground-200 overflow-hidden h-10 line-clamp-2 mb-5">
            {description}
          </p>
          <TechnologiesArea technologies={technologies} />

          <div className="flex justify-between items-end">
            <Link
              size="sm"
              href={fullUrl}
              showAnchorIcon
              color="secondary"
              underline="hover"
              anchorIcon={<MdArrowRightAlt className="text-2xl" />}
              className="dark:text-secondary-700"
            >
              {seeMore[language]}
            </Link>
            <div className="flex gap-2">
              {urlLive && (
                <Button
                  as={NextLink}
                  href={urlLive}
                  isIconOnly
                  radius="full"
                  color="secondary"
                  variant="flat"
                  size="sm"
                  target="_blank"
                >
                  <FaLink className="text-xl" />
                </Button>
              )}
              {urlRepository && (
                <Button
                  as={NextLink}
                  href={urlRepository}
                  isIconOnly
                  radius="full"
                  color="secondary"
                  variant="flat"
                  size="sm"
                  target="_blank"
                >
                  <FaGithub className="text-xl" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
