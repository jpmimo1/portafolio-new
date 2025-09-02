import cn from "classnames";
import { ReactNode } from "react";
import { SectionObserver } from "./SectionObserver";
import { MenuItems } from "@/data/menu";
import { Divider } from "@heroui/react";

type TProps = {
  title?: string;
  children: ReactNode;
  fullPage?: boolean;
  className?: string;
  classNames?: { title: string };
  section: TSectionsPage;
  language: TLanguages;
  sectionStandad?: boolean;
  divider?: boolean;
};

export const SectionLayout = ({
  children,
  fullPage = false,
  title,
  className,
  classNames,
  section,
  language,
  sectionStandad = true,
  divider = false,
}: TProps) => {
  const menuItem = MenuItems[language].find(({ key }) => key === section);

  const { url } = menuItem || {};

  const idSection = url?.slice(1);

  return (
    <>
      {divider ? (
        <Divider orientation="horizontal" className="h-[1px] bg-primary/15" />
      ) : null}
      <div
        className={cn(
          "relative flex flex-col",
          {
            "h-[calc(100vh-var(--header-height-default))] lg:h-[calc(100vh-var(--header-height-lg))] xl:h-[calc(100vh-var(--header-height-xl))]":
              fullPage,
          },
          { "pt-8 lg:pt-12 pb-24 lg:pb-32": !fullPage },
          { "section-container": sectionStandad },
          className
        )}
      >
        {title ? (
          <div className="main-container px-4 text-primary-600">
            <h2
              className={cn(
                "text-medium font-semibold py-1 mb-4 lg:mb-8 text-left font-mono border-b-1 border-primary/80",
                classNames?.title
              )}
            >
              {title}
            </h2>
          </div>
        ) : null}
        <div className="main-container grow px-4">{children}</div>
        <SectionObserver section={section} />
        {idSection ? (
          <div
            id={idSection}
            className="absolute bottom-full h-[var(--header-height-default)] lg:h-[var(--header-height-lg)] xl:h-[var(--header-height-xl)] w-0"
          />
        ) : null}
      </div>
    </>
  );
};
