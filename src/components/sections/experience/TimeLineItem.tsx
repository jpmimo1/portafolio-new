"use client";

import { presentLabel } from "@/data/experience";
import { Divider } from "@heroui/react";
import classNames from "classnames";
import { format, isValid, parseISO } from "date-fns";
import { es, enUS } from "date-fns/locale";
import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";

type TProps = {
  experienceItem: TExperienceItem;
  language: TLanguages;
  index: number;
};

const initialOdd = {
  opacity: 0,
  x: -50,
};

const initialEven = {
  opacity: 0,
  x: 50,
};

const formatDate = (dateString: string, language: TLanguages) => {
  if (dateString === "") {
    return presentLabel[language];
  }

  const date = parseISO(dateString);
  if (!isValid(date)) return "";

  return format(date, "MMMM yyyy", { locale: language === "es" ? es : enUS });
};

export const TimelineItem = ({ experienceItem, language, index }: TProps) => {
  const refContainer = useRef<HTMLDivElement>(null);
  const isInView = useInView(refContainer, { once: true, margin: "-200px" });
  const { company, endDate, startDate, position, responsibilities } =
    experienceItem;

  const endFormat = useMemo(() => {
    return formatDate(endDate, language);
  }, [endDate, language]);

  const startFormat = useMemo(() => {
    return formatDate(startDate, language);
  }, [startDate, language]);

  const isOdd = useMemo(() => {
    return index % 2 !== 0;
  }, [index]);

  return (
    <div ref={refContainer} className="relative">
      {/* circle */}
      <div className="w-[15px] h-[15px] top-[6px] left-[-22.5px] lg:left-1/2 lg:-translate-x-1/2 absolute bg-secondary-600 rounded-full" />
      <div
        className={classNames(
          "capitalize hidden lg:block absolute text-white text-sm px-2 py-1 bg-secondary-500 rounded-lg shadow-sm -top-[2px]",
          {
            "left-[calc(50%+20px)]": isOdd,
            "right-[calc(50%+20px)]": !isOdd,
          }
        )}
      >{`${startFormat} - ${endFormat}`}</div>

      <div className="overflow-hidden">
        <motion.div
          initial={isOdd ? initialOdd : initialEven}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:grid lg:grid-cols-2 lg:gap-12"
        >
          {!isOdd ? <div /> : null}
          <div>
            <h4
              className={classNames(
                "text-lg font-semibold text-secondary-600",
                {
                  "lg:text-right": isOdd,
                }
              )}
            >
              {position}
            </h4>
            <div className={classNames("pl-1", { "lg:pr-2 lg:pl:0": isOdd })}>
              <p className={classNames("px-1", { "lg:text-right": isOdd })}>
                {company}
              </p>
              <div
                className={classNames(
                  "capitalize mb-1 text-sm px-1 lg:hidden",
                  {
                    "lg:text-right": isOdd,
                  }
                )}
              >{`${startFormat} - ${endFormat}`}</div>
              <Divider className="h-[1px] bg-secondary-500/50 mb-2" />
              <ul
                className={classNames("list-disc pl-6 pr-4", {
                  "": isOdd,
                })}
              >
                {responsibilities.map((item, i) => {
                  return (
                    <li key={i} className="mb-1 lg:mb-2">
                      <p
                        className="text-sm leading-tight lg:leading-snug"
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {isOdd ? <div /> : null}
        </motion.div>
      </div>
    </div>
  );
};
