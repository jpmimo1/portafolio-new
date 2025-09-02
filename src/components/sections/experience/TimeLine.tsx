import { ExpereinceText } from "@/data/experience";
import { useMemo } from "react";
import { TimelineItem } from "./TimeLineItem";

type TProps = {
  language: TLanguages;
};

export const Timeline = ({ language }: TProps) => {
  const experienceHistory = useMemo(() => {
    return ExpereinceText[language].history;
  }, [language]);

  return (
    <div className="relative pl-5 lg:pl-0 flex flex-col gap-6">
      <div className="h-full absolute left-1 lg:left-1/2 lg:-translate-x-1/2 w-0.5 top-[10px] bg-secondary-500/50 dark:bg-white/50" />
      {experienceHistory.reverse().map((item, i) => {
        return (
          <TimelineItem
            experienceItem={item}
            key={item.company}
            language={language}
            index={i + 1}
          />
        );
      })}
    </div>
  );
};
