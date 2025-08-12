"use client";

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type TContextValue = {
  observer: IntersectionObserver | null;
  currentSection: TSectionsPage;
};

const HeaderContext = createContext<TContextValue>({} as TContextValue);

export const useHeaderContext = () => {
  return useContext(HeaderContext);
};

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [currentSection, setCurrentSection] = useState<TSectionsPage>("home-sec");
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);

  useEffect(() => {
    const newObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.id as TSectionsPage;
            setCurrentSection(elementId);
          }
        });
      },
      { threshold: 0.5 }
    );

    setObserver(newObserver);
  }, []);

  return (
    <HeaderContext.Provider value={{ observer, currentSection }}>
      {children}
    </HeaderContext.Provider>
  );
};
