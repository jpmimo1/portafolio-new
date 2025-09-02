import { ContactText } from "@/data/contact";
import { useMemo } from "react";
import { FloatingImage } from "./FloatingImage";
import { FormContact } from "./FormContact";

type TProps = {
  language: TLanguages;
};

export const ContactSection = ({ language }: TProps) => {
  const { subTitle } = useMemo(() => {
    return ContactText[language];
  }, [language]);

  return (
    <div>
      <p className="mb-6">{subTitle}</p>

      <div className="lg:flex lg:justify-center">
        <div className="flex justify-center lg:items-center translate-x-[10px] lg:-translate-x-[20px]">
          <FloatingImage />
        </div>
        <div className="flex justify-center">
          <FormContact language={language} />
        </div>
      </div>
    </div>
  );
};
