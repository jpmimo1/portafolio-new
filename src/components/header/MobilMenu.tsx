"use client";

import { Button } from "@heroui/button";
import classNames from "classnames";
import Link from "next/link";
import { ReactElement, useMemo } from "react";
import { FaGithub, FaHome, FaLaptopCode, FaLinkedin } from "react-icons/fa";
import { IoMail, IoPerson } from "react-icons/io5";
import { MdMenuBook, MdOutlineClose, MdWork } from "react-icons/md";
import { SwitchTheme } from "./SwitchTheme";
import { useHeaderContext } from "@/providers/headerProvider/HeaderProvider";
import { useParams } from "next/navigation";
import { ProjectsText } from "@/data/projects";
import { GITHUB_URL, LINKEDIN_URL } from "@/data/globals";

type TProps = {
  open: boolean;
  onClose: () => void;
  menuItems: TMenuItem[];
  language: TLanguages;
  menuLanguage: TMenuLanguage;
};

const iconsMenu: { [key in TIconsMenu]: ReactElement } = {
  home: <FaHome />,
  about: <IoPerson />,
  knowledge: <MdMenuBook />,
  experience: <MdWork />,
  projects: <FaLaptopCode />,
  contact: <IoMail />,
};

export const MobilMenu = ({
  open,
  onClose,
  menuItems,
  language,
  menuLanguage,
}: TProps) => {
  const params = useParams();
  const { currentSection } = useHeaderContext();

  const projectUrl = useMemo(() => {
    return params.project;
  }, [params]);

  const urlLanguages = useMemo(() => {
    if (!projectUrl) {
      return null;
    }

    const projectLanguage = ProjectsText[language].projects.find(
      ({ urlProject }) => urlProject === projectUrl
    );

    if (!projectLanguage) {
      return null;
    }

    const projectId = projectLanguage.id;

    const languagesUrls = (Object.keys(ProjectsText) as TLanguages[]).reduce<{
      [key in TLanguages]: string;
    }>(
      (prev, currentLang) => {
        const projectLang = ProjectsText[currentLang].projects.find(
          ({ id }) => id === projectId
        );

        if (!projectLang) {
          return { ...prev, [currentLang]: "" };
        }

        return {
          ...prev,
          [currentLang]: `/${currentLang}/project/${projectLang.urlProject}`,
        };
      },
      {} as { [key in TLanguages]: string }
    );

    return languagesUrls;
  }, [language, projectUrl]);

  return (
    <>
      <div
        className={classNames(
          "fixed top-0 w-full h-full bg-default-600/50 dark:bg-default-50/50 z-40 backdrop-blur-xs",
          { hidden: !open }
        )}
        onClick={() => {
          onClose();
        }}
      ></div>
      <div
        className={classNames(
          "fixed top-0 w-full max-w-[350px] h-full z-50  bg-background border-l-1 border-b-1 border-t-1 border-default-500/70 left-full duration-200 ease-in-out flex flex-col",
          { "-translate-x-full": open }
        )}
      >
        <div className="p-2 flex justify-between items-center border-b-1 border-default-500/70">
          <Button
            isIconOnly
            radius="full"
            variant="light"
            onPress={() => {
              onClose();
            }}
          >
            <MdOutlineClose size={25} />
          </Button>

          <SwitchTheme />
        </div>
        <div className="grow flex flex-col overflow-hidden">
          <div className="grow flex flex-col overflow-hidden">
            <div className="flex justify-center px-2 py-4">
              <Link
                href={"/"}
                className="border-3 flex w-[75px] h-[75px] justify-center items-center rounded-full border-primary bg-primary-50"
              >
                <span className="iconportafoliojp-iconjp text-primary text-5xl flex" />
              </Link>
            </div>

            <div className="flex flex-col px-3 gap-1 py-2 mt-2 mb-6 overflow-hidden">
              <div className="overflow-auto">
                <div className="flex flex-col">
                  {menuItems.map(({ icon, label, url, key }) => {
                    return (
                      <Button
                        as={Link}
                        onClick={(e) => {
                          e.preventDefault();
                          onClose();
                          setTimeout(() => {
                            window.location.href = (
                              e.target as HTMLLinkElement
                            ).href;
                          }, 300);
                        }}
                        className="text-foreground"
                        key={key}
                        startContent={iconsMenu[icon]}
                        href={`${url}`}
                        size="lg"
                        variant={
                          !projectUrl && currentSection === key
                            ? "flat"
                            : "light"
                        }
                        radius="none"
                        color="primary"
                      >
                        {label}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-center text-primary-600 text-lg">
                {menuLanguage.title}
              </div>
              <div className="flex gap-3 justify-center">
                {menuLanguage.items.map(({ key, label }) => {
                  return (
                    <Button
                      as={Link}
                      href={urlLanguages ? urlLanguages[key] : `/${key}`}
                      key={key}
                      variant={key === language ? "solid" : "bordered"}
                      className={key === language ? "text-white" : ""}
                      color="primary"
                      onClick={(e) => {
                        if (key === language) {
                          onClose();
                          e.preventDefault();
                        }
                      }}
                    >
                      {label}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex gap-2 justify-center p-2">
            <Button
              as={Link}
              target="_blank"
              isIconOnly
              size="lg"
              color="primary"
              variant="light"
              radius="full"
              href={GITHUB_URL}
            >
              <FaGithub size={30} />
            </Button>
            <Button
              as={Link}
              target="_blank"
              isIconOnly
              size="lg"
              color="primary"
              variant="light"
              radius="full"
              href={LINKEDIN_URL}
            >
              <FaLinkedin size={30} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
