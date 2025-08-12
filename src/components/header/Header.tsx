"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/button";
import { MdOutlineMenu } from "react-icons/md";
import { MobilMenu } from "./MobilMenu";
import { DesktopMenu } from "./DesktopMenu";
import classNames from "classnames";

type TProps = {
  menuItems: TMenuItem[];
  menuLanguage: TMenuLanguage;
  language: TLanguages;
};

export const Header = ({ menuItems, language, menuLanguage }: TProps) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header
        className={classNames(
          "bg-primary-50/90 backdrop-blur-xs fixed w-full z-30 top-0 border-b-1 border-default-500/70 shadow flex items-center",
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
