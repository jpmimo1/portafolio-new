"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { CSSProperties, useEffect, useMemo, useState } from "react";

type TColorsTechnologies = {
  label: string;
  colorOficial: string;
  altDark: string;
  altLight: string;
  modeLight: "text" | "highlight";
  modeDark: "text" | "highlight";
};

const technologies: TColorsTechnologies[] = [
  {
    label: " React.js",
    colorOficial: "#61DAFB",
    altDark: "#21A1C4",
    altLight: "#00A3CC",
    modeLight: "text",
    modeDark: "text",
  },
  {
    label: "Next.js",
    colorOficial: "#000000",
    altDark: "#111111",
    altLight: "#FFFFFF",
    modeLight: "text",
    modeDark: "highlight",
  },
  {
    label: "Node.js",
    colorOficial: "#339933",
    altDark: "#267326",
    altLight: "#66BB66",
    modeLight: "text",
    modeDark: "text",
  },
  {
    label: "TypeScript",
    colorOficial: "#3178C6",
    altDark: "#255A92",
    altLight: "#4FA3FF",
    modeLight: "text",
    modeDark: "text",
  },
  {
    label: "Tailwind CSS",
    colorOficial: "#38BDF8",
    altDark: "#1E90D6",
    altLight: "#4CCBFF",
    modeLight: "text",
    modeDark: "text",
  },
  {
    label: "Prisma ORM",
    colorOficial: "#0C344B",
    altDark: "#0C344B",
    altLight: "#FFFFFF",
    modeLight: "text",
    modeDark: "highlight",
  },
  {
    label: "PostgreSQL",
    colorOficial: "#336791",
    altDark: "#254B6A",
    altLight: "#4C8CC9",
    modeLight: "text",
    modeDark: "text",
  },
  {
    label: "Docker",
    colorOficial: "#2496ED",
    altDark: "#1C75B9",
    altLight: "#52B8FF",
    modeLight: "text",
    modeDark: "text",
  },
];

export default function TypewriterFramer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  const deleteText = (currentWord: string) => {
    let showText = currentWord.length;
    const interval = setInterval(() => {
      setDisplayText(currentWord.slice(0, showText));
      if (showText === 0) {
        clearInterval(interval);
        setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % technologies.length);
        }, 500);
      }
      showText--;
    }, 100);
  };

  useEffect(() => {
    const currentWord = technologies[wordIndex].label;
    let i = 0;
    const typingInterval = setInterval(() => {
      setDisplayText(currentWord.slice(0, i + 1));
      i++;
      if (i === currentWord.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          deleteText(currentWord);
        }, 1500);
      }
    }, 100); // velocidad de escritura
    return () => clearInterval(typingInterval);
  }, [wordIndex]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stylesText: CSSProperties = useMemo(() => {
    const { colorOficial, altDark, altLight, modeDark, modeLight } =
      technologies[wordIndex];
    if (theme === "light") {
      if (modeLight === "text") {
        return { color: altDark };
      }
      return { backgroundColor: altDark, color: colorOficial };
    }
    if (modeDark === "text") {
      return { color: altLight };
    }
    return { backgroundColor: altLight, color: colorOficial };
  }, [wordIndex, theme]);

  if (!mounted) return null;

  return (
    <>
      <span style={stylesText} className="font-extrabold">
        {displayText}
      </span>
      <span className="relative">
        <motion.div
          className="w-[3px] h-full bg-foreground block absolute top-0 left-[0px]"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </span>
    </>
  );
}
