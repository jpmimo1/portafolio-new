"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { motion, Transition } from "framer-motion";

// const lightColors = [
//   "rgba(173, 216, 230, 0.5)", // azul claro
//   "rgba(255, 182, 193, 0.45)", // rosa pastel
//   "rgba(144, 238, 144, 0.4)", // verde claro
// ];

// const darkColors = [
//   "rgba(100, 108, 255, 0.4)", // azul suave
//   "rgba(255, 99, 132, 0.35)", // rosado tenue
//   "rgba(56, 239, 125, 0.3)", // verde menta
// ];

const lightColors = [
  "rgba(0, 164, 146, 0.35)", // primario
  "rgba(0, 200, 255, 0.25)", // cian suave
  "rgba(255, 195, 0, 0.2)", // dorado suave
];

const darkColors = [
  "rgba(0, 164, 146, 0.35)", // primario
  "rgba(0, 122, 204, 0.25)", // azul profundo
  "rgba(255, 94, 77, 0.25)", // coral tenue
];

export default function ElegantWaves() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [heightContainer, setHeightContainer] = useState(0);
  const [widthContainer, setWidthContainer] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Paleta según tema
  const colors = useMemo(() => {
    return theme === "dark" ? darkColors : lightColors;
  }, [theme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const container = containerRef.current;
    if (!container) return;

    const updateWidthContainer = () => {
      if (containerRef.current) {
        setWidthContainer(containerRef.current.clientWidth);
        setHeightContainer(containerRef.current.clientHeight);
      }
    };

    updateWidthContainer();

    window.addEventListener("resize", updateWidthContainer);

    return () => {
      window.removeEventListener("resize", updateWidthContainer);
    };
  }, [mounted]);

  // Configuración de animación lenta y elegante
  const transitionConfig: Transition = {
    duration: 15,
    repeat: Infinity,
    repeatType: "mirror" as const,
    ease: "easeInOut",
  };

  const sizeWawe = useMemo(() => {
    return (widthContainer + heightContainer) / 2;
  }, [widthContainer, heightContainer]);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden -z-10 blur-2xl lg:blur-3xl opacity-80 dark:opacity-45"
    >
      {/* Onda 1 */}
      <motion.div
        className="absolute rounded-full opacity-100 "
        style={{
          background: colors[0],
          top: "-10%",
          left: "-10%",
          width: sizeWawe * 0.5,
          height: sizeWawe * 0.5,
        }}
        animate={{
          x: [0, widthContainer * 0.1, 0],
          y: [0, -heightContainer * 0.15, 0],
          backgroundColor: [colors[0], colors[1], colors[0]],
        }}
        transition={transitionConfig}
      />

      {/* Onda 2 */}
      <motion.div
        className="absolute rounded-full opacity-100"
        style={{
          background: colors[1],
          bottom: "-15%",
          right: "-5%",
          width: sizeWawe * 0.6,
          height: sizeWawe * 0.6,
        }}
        animate={{
          x: [0, -widthContainer * 0.08, 0],
          y: [0, heightContainer * 0.1, 0],
          backgroundColor: [colors[1], colors[2], colors[1]],
        }}
        transition={transitionConfig}
      />

      {/* Onda 3 */}
      <motion.div
        className="absolute rounded-full opacity-100"
        style={{
          background: colors[2],
          top: "30%",
          left: "20%",
          width: sizeWawe * 0.4,
          height: sizeWawe * 0.4,
        }}
        animate={{
          x: [0, widthContainer * 0.05, 0],
          y: [0, -heightContainer * 0.05, 0],
          backgroundColor: [colors[2], colors[0], colors[2]],
        }}
        transition={transitionConfig}
      />
    </div>
  );
}
