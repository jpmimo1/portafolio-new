"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const FloatingImage = () => {
  return (
    <motion.div
      animate={{
        y: [5, -5, 5],
        x: [5, -5, 5],
        scale: [1, 1.02, 1],
        transition: {
          x: { repeat: Infinity, duration: 10, ease: "easeInOut" },
          y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
          scale: { repeat: Infinity, duration: 7, ease: "easeInOut" },
        },
      }}
    >
      <Image
        src={"/images/contact-2.svg"}
        width={250}
        height={250}
        alt="mail-contact"
        className="w-[300px] lg:w-[400px] -mt-[25px] -mb-[25px]"
      />
    </motion.div>
  );
};
