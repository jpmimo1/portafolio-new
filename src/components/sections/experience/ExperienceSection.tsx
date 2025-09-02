import { ExpereinceText } from "@/data/experience";
import { useMemo } from "react";
import { Timeline } from "./TimeLine";

type TProps = {
  language: TLanguages;
};

export const ExperienceSection = ({ language }: TProps) => {
  const experienceSubtitle = useMemo(() => {
    return ExpereinceText[language].subTitle;
  }, [language]);

  return (
    <div>
      <p className="mb-6 lg:mb-12">{experienceSubtitle}</p>
      <Timeline language={language}/>
    </div>
  );
};
