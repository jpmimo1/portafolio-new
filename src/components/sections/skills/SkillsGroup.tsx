import { Divider } from "@heroui/react";
import { TechnologyItem } from "./TechnologyItem";
import { Variants } from "framer-motion";
import { motion } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

type TProps = {
  skillGroup: TSkillGroup;
};

export const SkillsGroup = ({ skillGroup }: TProps) => {
  const { label, items } = skillGroup;

  return (
    <motion.div variants={fadeUp}>
      <h4 className="text-primary-600 dark:text-primary-800 text-lg font-semibold text-center mb-1">
        {label}
      </h4>
      <Divider className="h-[1px] bg-primary-300/20 dark:bg-divider/10" />
      <div className="pt-3 lg:p-5">
        <div className="flex justify-center flex-wrap">
          {items.map((item) => {
            return <TechnologyItem key={item.name} skillItem={item} />;
          })}
        </div>
      </div>
    </motion.div>
  );
};
