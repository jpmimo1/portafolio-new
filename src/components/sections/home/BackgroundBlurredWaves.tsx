import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const lightColors = {
  base: "#f9fafb",
  wave1: "rgba(0, 164, 146, 0.15)",
  wave2: "rgba(0, 164, 146, 0.1)",
  wave3: "rgba(0, 164, 146, 0.08)",
};

const darkColors = {
  base: "#0f172a",
  wave1: "rgba(0, 164, 146, 0.2)",
  wave2: "rgba(0, 164, 146, 0.15)",
  wave3: "rgba(0, 164, 146, 0.1)",
};

export const BackgroundBlurredWaves = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const colors = useMemo(() => {
    return resolvedTheme === "dark" ? darkColors : lightColors;
  }, [resolvedTheme]);

  if (!mounted) return null;

  return (
    <div
      className="absolute top-0 left-0 h-full w-full overflow-hidden z-[-1] pointer-events-none"
      style={{ backgroundColor: colors.base }}
    >
      {/* Onda 1 */}
      <motion.div
        className="absolute w-[150%] h-[150%] -top-1/4 -left-1/4"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, ${colors.wave1} 0%, transparent 40%)`,
        }}
        animate={{
          x: ["0%", "5%", "0%"],
          y: ["0%", "-5%", "0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Onda 2 */}
      <motion.div
        className="absolute w-[150%] h-[150%] -top-1/4 -left-1/4"
        style={{
          backgroundImage: `radial-gradient(circle at 80% 70%, ${colors.wave2} 0%, transparent 40%)`,
        }}
        animate={{
          x: ["0%", "-3%", "0%"],
          y: ["0%", "4%", "0%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Onda 3 */}
      <motion.div
        className="absolute w-[150%] h-[150%] -top-1/4 -left-1/4"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 90%, ${colors.wave3} 0%, transparent 40%)`,
        }}
        animate={{
          x: ["0%", "2%", "0%"],
          y: ["0%", "-3%", "0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
