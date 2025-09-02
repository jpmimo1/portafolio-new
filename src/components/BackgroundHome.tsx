"use client";

import { useBackgroundTransitions } from "@/hooks/useBackgroundTransitions";

export const BackgroundHome = ({ language }: { language: TLanguages }) => {
  useBackgroundTransitions(language);
  return null;
};
