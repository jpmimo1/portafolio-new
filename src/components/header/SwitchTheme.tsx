"use client";

import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <Switch
      isSelected={theme === "light"}
      onValueChange={(isSelected) => {
        setTheme(isSelected ? "light" : "dark");
      }}
      thumbIcon={({ isSelected, className }) => {
        return isSelected ? (
          <MdLightMode className={className} />
        ) : (
          <MdDarkMode className={className} />
        );
      }}
    />
  );
};
