"use client";

import { SkillsText } from "@/data/skills";
import React, { useEffect, useMemo, useState } from "react";
import { SkillsGroup } from "./SkillsGroup";
import { motion, Variants } from "framer-motion";
import { useHeaderContext } from "@/providers/headerProvider/HeaderProvider";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // escalonado
    },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const sectionId: TSectionsPage = "knowledge-sec";

type TProps = {
  language: TLanguages;
};

export const SkillsSection = ({ language }: TProps) => {
  const [enterOnSection, setEnterOnSection] = useState(false);
  const { currentSection } = useHeaderContext();
  const subTitle = useMemo(() => {
    return SkillsText[language].subTitle;
  }, [language]);

  const itemsSkills = useMemo(() => {
    return SkillsText[language].groups;
  }, [language]);

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
      <motion.p variants={fadeRight} className="mb-7 lg:mb-14">
        {subTitle}
      </motion.p>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-14">
        {Object.keys(itemsSkills).map((skillId) => {
          const skillGroup = itemsSkills[skillId as TSkillGroups];
          return <SkillsGroup key={skillId} skillGroup={skillGroup} />;
        })}
      </div>
    </motion.div>
  );
};
