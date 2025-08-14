import classNames from "classnames";
import { ReactNode } from "react";
import { SectionObserver } from "./SectionObserver";
import { MenuItems } from "@/data/menu";

type TProps = {
  title?: string;
  children: ReactNode;
  fullPage?: boolean;
  className?: string;
  section: TSectionsPage;
  language: TLanguages;
};

export const SectionLayout = ({
  children,
  fullPage = false,
  title,
  className,
  section,
  language,
}: TProps) => {
  const menuItem = MenuItems[language].find(({ key }) => key === section);

  const { url } = menuItem || {};

  const idSection = url?.slice(1);

  return (
    <div
      className={classNames(
        "relative flex flex-col",
        {
          "h-[calc(100vh-var(--header-height-default))] lg:h-[calc(100vh-var(--header-height-lg))] xl:h-[calc(100vh-var(--header-height-xl))]":
            fullPage,
        },
        className
      )}
    >
      {title ? (
        <div className="main-container">
          <h2 className="text-center text-4xl py-3">{title}</h2>
        </div>
      ) : null}
      <div className="main-container grow">{children}</div>
      <SectionObserver section={section} />
      {idSection ? (
        <div
          id={idSection}
          className="absolute bottom-full h-[var(--header-height-default)] lg:h-[var(--header-height-lg)] xl:h-[var(--header-height-xl)] w-0"
        />
      ) : null}
    </div>
  );
};
