"use client";

import { useBackgroundTransitions } from "@/hooks/useBackgroundTransitions";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
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

type TSectionsRatio = { [key in TSectionsPage]: number };

const sectionsRatio: TSectionsRatio = {
  "home-sec": 0,
  "about-sec": 0,
  "knowledge-sec": 0,
  "experience-sec": 0,
  "projects-sec": 0,
  "contact-sec": 0,
};

export const HeaderProvider = ({
  children,
  language,
}: {
  children: ReactNode;
  language: TLanguages;
}) => {
  const [currentSectionsRatios, setCurrentSectionsRatios] =
    useState<TSectionsRatio>(sectionsRatio);

  const [observer, setObserver] = useState<IntersectionObserver | null>(null);

  useEffect(() => {
    const newObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elementId = entry.target.id as TSectionsPage;
          const { isIntersecting, intersectionRatio } = entry;
          setCurrentSectionsRatios((prev) => ({
            ...prev,
            [elementId]: isIntersecting ? intersectionRatio : 0,
          }));
        });
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    setObserver(newObserver);
  }, []);

  const currentSection = useMemo(() => {
    const sectionsIds = Object.keys(currentSectionsRatios) as TSectionsPage[];

    const maxSectionRatio: TSectionsPage = sectionsIds.reduce<TSectionsPage>(
      (prev, currentSectionId): TSectionsPage => {
        const prevRatio = currentSectionsRatios[prev];
        const currentRatio = currentSectionsRatios[currentSectionId];
        if (prevRatio < currentRatio) {
          return currentSectionId;
        }
        return prev;
      },
      "home-sec"
    );

    return maxSectionRatio;
  }, [currentSectionsRatios]);

  return (
    <HeaderContext.Provider value={{ observer, currentSection }}>
      {children}
    </HeaderContext.Provider>
  );
};
