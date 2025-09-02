"use client";

import { useEffect } from "react";

export const BackgroundClear = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--background-section", "none");
  }, []);

  return null;
};
