"use client";

import { SwitchTheme } from "./SwitchTheme";
import { Link, Tab, Tabs } from "@heroui/react";
import { SelectLanguage } from "./SelectLanguage";
import { useHeaderContext } from "@/providers/headerProvider/HeaderProvider";
import { useParams } from "next/navigation";
import { useMemo } from "react";

type TProps = {
  menuItems: TMenuItem[];
  language: TLanguages;
  menuLanguage: TMenuLanguage;
};

export const DesktopMenu = ({ menuItems, language, menuLanguage }: TProps) => {
  const params = useParams();
  const { currentSection } = useHeaderContext();

  const isProject = useMemo(() => {
    return !!params.project;
  }, [params]);

  return (
    <div className="flex gap-3">
      <Tabs
        variant="underlined"
        color="primary"
        size="md"
        selectedKey={isProject ? "" : currentSection}
        classNames={{
          tabContent: "text-foreground",
        }}
      >
        {menuItems.map(({ label, key, url }) => {
          return <Tab title={label} key={key} as={Link} href={url} />;
        })}
      </Tabs>
      <SelectLanguage language={language} menuLanguage={menuLanguage} />
      <SwitchTheme />
    </div>
  );
};
