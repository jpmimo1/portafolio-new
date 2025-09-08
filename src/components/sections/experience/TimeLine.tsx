import { ExpereinceText } from "@/data/experience";
import { TimelineItem } from "./TimeLineItem";
import { compareDesc, parseISO } from "date-fns";

type TProps = {
  language: TLanguages;
};

export const Timeline = ({ language }: TProps) => {
  const experienceHistory = ExpereinceText[language].history.sort(
    (experienceA, experienceB) => {
      const toA =
        experienceA.endDate !== "" ? parseISO(experienceA.endDate) : new Date();
      const toB =
        experienceB.endDate !== "" ? parseISO(experienceB.endDate) : new Date();

      return compareDesc(toA, toB);
    }
  );

  return (
    <div className="relative pl-5 lg:pl-0 flex flex-col gap-6">
      <div className="h-full absolute left-1 lg:left-1/2 lg:-translate-x-1/2 w-0.5 top-[10px] bg-secondary-500/50 dark:bg-white/50" />
      {experienceHistory.map((item, i) => {
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
