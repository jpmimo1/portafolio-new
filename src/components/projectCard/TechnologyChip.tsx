"use client";

import { TechnologiesFormat } from "@/data/technologiesFormat";
import { Chip } from "@heroui/chip";
import { useTheme } from "next-themes";
import { useMemo } from "react";
import { TSizes } from "./TechnologiesArea";

const minWidthClassNames: { [key in TSizes]: string } = {
  sm: "min-w-[70px]",
  md: "min-w-[80px]",
  lg: "min-w-[90px]",
};

type TProps = {
  technology: TTechnologies;
  size: TSizes;
};

export const TechnologyChip = ({ technology, size }: TProps) => {
  const { resolvedTheme } = useTheme();

  const technologyFormat = useMemo(() => {
    const format = TechnologiesFormat.find(({ label }) => label === technology);
    if (!format) {
      return;
    }

    return format[resolvedTheme as "light" | "dark"];
  }, [technology, resolvedTheme]);

  if (!technologyFormat) {
    return null;
  }

  return (
    <Chip
      color="default"
      size={size}
      style={{
        backgroundColor: technologyFormat.backgroundColor,
        color: technologyFormat.textColor,
        borderColor: "rgba(0,0,0,0.2)",
      }}
      variant="bordered"
      className="select-none text-center"
      classNames={{ content: minWidthClassNames[size] }}
    >
      {technology}
    </Chip>
  );
};
