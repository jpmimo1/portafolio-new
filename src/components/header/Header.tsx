"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/button";
import { MdOutlineMenu } from "react-icons/md";
import { MobilMenu } from "./MobilMenu";
import { DesktopMenu } from "./DesktopMenu";
import classNames from "classnames";
import { useParams } from "next/navigation";
import { MenuItems, MenuLanguages, MenuProjectItems } from "@/data/menu";

type TProps = {
  language: TLanguages;
};

export const Header = ({ language }: TProps) => {
  const params = useParams();
  const [openMenu, setOpenMenu] = useState(false);

  const menuItems = useMemo(() => {
    const project = params.project;
    if (!project) {
      return MenuItems[language];
    }
    return MenuProjectItems[language];
  }, [language, params]);

  const menuLanguage = useMemo(() => {
    return MenuLanguages[language];
  }, [language]);

  return (
    <>
      <header
        className={classNames(
          "bg-default-50/70 dark:bg-default-100/70 backdrop-blur-md fixed w-full z-30 top-0 border-b-1 border-default-500/70 shadow flex items-center",
          "h-[var(--header-height-default)] lg:h-[var(--header-height-lg)] xl:h-[var(--header-height-xl)]"
        )}
      >
        <div className="main-container flex justify-between px-2 items-end">
          <Link href={"/"}>
            <span className="iconportafoliojp-iconjp flex text-4xl xl:text-5xl text-primary dark:text-foreground "></span>
          </Link>
          <div className="hidden lg:block">
            <DesktopMenu
              menuLanguage={menuLanguage}
              language={language}
              menuItems={menuItems}
            />
          </div>
          <Button
            className="lg:hidden"
            isIconOnly
            radius="full"
            variant="light"
            onPress={() => {
              setOpenMenu(true);
            }}
          >
            <MdOutlineMenu size={25} />
          </Button>
        </div>
      </header>
      <div className="lg:hidden">
        <MobilMenu
          menuLanguage={menuLanguage}
          language={language}
          menuItems={menuItems}
          open={openMenu}
          onClose={() => {
            setOpenMenu(false);
          }}
        />
      </div>
    </>
  );
};
