import { MenuItems } from "@/data/menu";
import { useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

const backgroundSections: TBackgroungSection[] = [
  {
    id: "home-sec",
    background: {
      dark: "#0e1716",
      light: "#f8fdfc",
    },
  },
  {
    id: "about-sec",
    background: {
      dark: "#45615c",
      light: "#d8f7f1",
    },
  },
  {
    id: "knowledge-sec",
    background: {
      dark: "#0e1716",
      light: "#f8fdfc",
    },
  },
  {
    id: "experience-sec",
    background: {
      dark: "#08426e",
      light: "#b4d1fd",
    },
  },
  {
    id: "projects-sec",
    background: {
      dark: "#45615c",
      light: "#d8f7f1",
    },
  },
  {
    id: "contact-sec",
    background: {
      dark: "#0e1716",
      light: "#f8fdfc",
    },
  },
];

export const useBackgroundTransitions = (language: TLanguages) => {
  const { resolvedTheme } = useTheme();
  const [sectionsFactors, setSectionsFactors] = useState<number[]>(
    Array.from({ length: backgroundSections.length }, () => 0)
  );
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const bodyHeight = document.body.offsetHeight;
    const windowHeight = window.innerHeight;
    const sectionsFactorsNew = backgroundSections
      .map(({ id }) => {
        const menuItem = MenuItems[language].find(({ key }) => key === id);
        const { url } = menuItem || {};
        const idSection = url?.slice(1) || "";

        const element = document.getElementById(idSection);
        if (!element) {
          return null;
        }
        return (
          (element.getBoundingClientRect().top + window.scrollY) /
          (bodyHeight - windowHeight)
        );
      })
      .filter((value) => value !== null);

    setSectionsFactors(sectionsFactorsNew);
  }, []);

  const listBackgrounds = useMemo(() => {
    return backgroundSections.map(
      (item) => item.background[resolvedTheme === "dark" ? "dark" : "light"]
    );
  }, [resolvedTheme]);

  const bg = useTransform(scrollYProgress, sectionsFactors, listBackgrounds);

  useEffect(() => {
    const unsubscribe = bg.on("change", (value) => {
      document.documentElement.style.setProperty("--background-section", value);
    });
    return () => unsubscribe();
  }, [bg]);
};
