"use client";

import { useHeaderContext } from "@/providers/headerProvider/HeaderProvider";
import { useEffect, useRef } from "react";

type TProps = {
  section: TSectionsPage;
};

export const SectionObserver = ({ section }: TProps) => {
  const { observer } = useHeaderContext();

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (element && observer) {
      observer.observe(element);
    }
    return () => {
      if (element && observer) {
        observer.unobserve(element);
      }
    };
  }, [observer]);

  return (
    <div
      id={section}
      ref={elementRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
    ></div>
  );
};
