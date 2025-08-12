"use client";

import { SwitchTheme } from "./SwitchTheme";
import { Link, Tab, Tabs } from "@heroui/react";
import { SelectLanguage } from "./SelectLanguage";
import { useHeaderContext } from "@/providers/headerProvider/HeaderProvider";

type TProps = {
  menuItems: TMenuItem[];
  language: TLanguages;
  menuLanguage: TMenuLanguage;
};

export const DesktopMenu = ({ menuItems, language, menuLanguage }: TProps) => {
  const { currentSection } = useHeaderContext();
  return (
    <div className="flex gap-3">
      <Tabs
        variant="underlined"
        color="primary"
        size="md"
        selectedKey={currentSection}
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
