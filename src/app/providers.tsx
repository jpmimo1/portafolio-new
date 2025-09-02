"use client";

import { ReactNode } from "react";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { HeaderProvider } from "@/providers/headerProvider/HeaderProvider";
import { useRouter } from "next/navigation";

export const Providers = ({
  children,
  language,
}: {
  children: ReactNode;
  language: TLanguages;
}) => {
  const router = useRouter();
  return (
    <HeroUIProvider navigate={router.push}>
      <ToastProvider />
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        <HeaderProvider language={language}>{children}</HeaderProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
};
