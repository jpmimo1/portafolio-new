"use client";

import { ReactNode } from "react";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { HeaderProvider } from "@/providers/headerProvider/HeaderProvider";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <HeroUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        <HeaderProvider>{children}</HeaderProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
};
