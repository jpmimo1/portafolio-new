"use client";

import { AboutText } from "@/data/about";
import { useHeaderContext } from "@/providers/headerProvider/HeaderProvider";
import { Button } from "@heroui/button";
import { Variants } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { motion } from "framer-motion";

type TProps = {
  language: TLanguages;
};

const sectionId: TSectionsPage = "about-sec";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // escalonado
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const AboutSection = ({ language }: TProps) => {
  const {
    subTitle,
    content,
    buttonAction1Label,
    buttonAction1Url,
    buttonAction2Label,
    buttonAction2Url,
  } = AboutText[language];

  const { currentSection } = useHeaderContext();
  const [enterOnSection, setEnterOnSection] = useState(false);

  useEffect(() => {
    if (currentSection === sectionId) {
      setEnterOnSection(true);
    }
  }, [currentSection]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={enterOnSection ? "visible" : "hidden"}
    >
      <div className="flex gap-10">
        <div>
          <motion.h3
            variants={fadeRight}
            className="text-lg/tight text-primary-600 font-semibold mb-3 lg:mb-6 lg:text-xl"
          >
            {subTitle}
          </motion.h3>
          <motion.div variants={zoomIn} className="translate-x-3">
            <Image
              src={"/images/home-laptop.svg"}
              width={150}
              height={150}
              alt="home-laptop"
              className="w-[200px] pb-2 mx-auto lg:hidden"
            />
          </motion.div>
          <motion.p
            dangerouslySetInnerHTML={{ __html: content }}
            className="text-base/snug mb-10 lg:mb-16"
            variants={fadeUp}
          />
        </div>
        <motion.div variants={zoomIn} className="shrink-0">
          <Image
            src={"/images/home-laptop.svg"}
            width={150}
            height={150}
            alt="home-laptop"
            className="w-[400px] pb-2 mx-auto hidden lg:block translate-y-4"
          />
        </motion.div>
      </div>
      <motion.div className="flex gap-2 lg:gap-6" variants={fadeRight}>
        <Button
          startContent={<FaLaptopCode size={20} />}
          color="primary"
          variant="solid"
          className="w-[145px] lg:w-[180px] lg:text-medium lg:gap-3 lg:h-12"
        >
          {buttonAction1Label}
        </Button>
        <Button
          startContent={<IoMail size={20} />}
          color="primary"
          variant="solid"
          className="w-[145px] lg:w-[180px] lg:text-medium lg:gap-3 lg:h-12"
        >
          {buttonAction2Label}
        </Button>
      </motion.div>
    </motion.div>
  );
};
