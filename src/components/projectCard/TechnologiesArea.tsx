"use client";

import { ScrollShadow } from "@heroui/react";
import React, { useEffect, useRef, useState } from "react";
import { TechnologyChip } from "./TechnologyChip";

export type TSizes = "sm" | "md" | "lg";

type TProps = {
  technologies: TTechnologies[];
  size?: TSizes;
};
export const TechnologiesArea = ({ technologies, size = "sm" }: TProps) => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const containerRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Fuerza un evento de scroll para que el ScrollShadow se actualice
    if (containerRef.current && mounted) {
      containerRef.current.dispatchEvent(new Event("scroll"));
    }
  }, [mounted]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };
  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !containerRef.current) return;
    e.preventDefault(); // evita selección de texto
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1; // multiplicador de velocidad
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  if (!mounted) {
    return null;
  }

  return (
    <ScrollShadow
      ref={containerRef}
      orientation="horizontal"
      className="mb-5 py-2 cursor-grab"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      hideScrollBar
      size={20}
    >
      <div className="flex gap-2">
        {technologies.map((technology) => {
          return (
            <TechnologyChip
              size={size}
              technology={technology}
              key={technology}
            />
          );
        })}
      </div>
    </ScrollShadow>
  );
};
