"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "@heroui/react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Detecta cuando estamos casi al final de la página
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      setIsVisible(bottom);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="back-to-top"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={scrollToTop}
          className="fixed bottom-14 right-8"
        >
          <Button
            variant="solid"
            isIconOnly
            size="lg"
            radius="full"
            color="primary"
            className="shadow-md"
            onPress={() => {
              scrollToTop();
            }}
          >
            <FaArrowUp size={24} />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
