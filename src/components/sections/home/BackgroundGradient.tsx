import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

// const lightColors = ["#f3faf8", "#d2f4ee", "#00a492"];
// const darkColors = ["#102323", "#005f56", "#00a492"];

// const lightColors = ["#f3faf8", "#00a492", "#ffd166"];
// const darkColors = ["#102323", "#00a492", "#ff7b54"];

const lightColors = ["#f3faf8", "#b2dfd7", "#00a492"];
const darkColors = ["#102323", "#007f77", "#00a492"];

export const BackgroundGradient = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const colors = useMemo(() => {
    return theme === "dark" ? darkColors : lightColors;
  }, [theme]);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "100% 50%" }}
      transition={{
        duration: 20, // más lento = más sutil
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `linear-gradient(-45deg, ${colors.join(", ")})`,
        backgroundSize: "400% 400%",
        zIndex: -1,
        opacity: 0.3, // más bajo = más discreto
        pointerEvents: "none",
      }}
    />
  );
};
