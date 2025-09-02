import { Card } from "@heroui/card";
import Image from "next/image";

type TProps = {
  skillItem: TSkillItem;
};

export const TechnologyItem = ({ skillItem }: TProps) => {
  const { name, url } = skillItem;
  return (
    <div className="flex flex-col items-center gap-2 mr-3 lg:mr-5 w-[calc((100%-(0.75rem*3))/4)] lg:w-[calc((100%-(1.25rem*3))/4)] last:mr-0 transform transition-transform duration-300 hover:scale-105 active:scale-105">
      <Card
        className="bg-default-50/20 dark:bg-default-900/20 flex flex-col justify-between gap-2 items-center w-full p-1 mx-auto aspect-square"
        shadow="sm"
      >
        <div className="p-2 lg:p-4 grow w-full">
          <div className="relative w-full h-full">
            <Image
              alt={name}
              src={`/images/technologies/${url}`}
              width={250}
              height={250}
              className="absolute w-full h-full object-contain pointer-events-none"
            />
          </div>
        </div>
      </Card>
      <span className="text-center text-sm/tight select-none">{name}</span>
    </div>
  );
};
