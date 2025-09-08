"use client";
import { HomeText } from "@/data/home";
import { Button } from "@heroui/button";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdMail, MdPictureAsPdf } from "react-icons/md";
import TypewriterFramer from "./Technologies";
import { motion, Variants } from "framer-motion";
import ElegantWaves from "./BackgroundBlurredWavesTheme";
import Link from "next/link";
import { GITHUB_URL, LINKEDIN_URL } from "@/data/globals";

type TProps = {
  language: TLanguages;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60 },
  },
};

export const HomeSection = ({ language }: TProps) => {
  const homeData = HomeText[language];

  const {
    mainText1,
    mainText2,
    secondText,
    description,
    buttonCVLabel,
    buttonCVUrl,
    buttonContactLabel,
    buttonContactUrl,
  } = homeData;

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full h-full flex justify-center items-center"
      >
        <div className="flex flex-col-reverse lg:flex-row lg:gap-12 items-center px-2 py-14 lg:-translate-x-4 lg:translate-y-8">
          <div>
            <motion.div
              variants={itemVariants}
              className="text-3xl lg:text-4xl text-center mb-2 lg:mb-4"
            >
              <div className="inline text-4xl lg:text-5xl">👋 </div>
              <h1 className="inline font-semibold">{mainText1}</h1>
              <div className="inline font-semibold text-primary-600">
                {mainText2}
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="text-2xl lg:text-3xl text-center mb-2 lg:mb-4"
            >
              {secondText}
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="text-lg lg:text-xl text-center mb-6 lg:mb-8"
            >
              {description}
              <span className="ml-1 text-xl lg:text-2xl">
                <TypewriterFramer />
              </span>
            </motion.div>
            <div className="flex flex-col">
              <motion.div
                variants={itemVariants}
                className="flex gap-2 lg:gap-4 justify-center mb-10 lg:mb-14"
              >
                <Button
                  as={Link}
                  href={buttonContactUrl}
                  variant="bordered"
                  color="primary"
                  startContent={<MdMail size={20} />}
                  className="w-[150px] lg:w-[180px] lg:text-medium lg:gap-3 lg:h-12"
                  radius="full"
                >
                  {buttonContactLabel}
                </Button>
                <Button
                  as={Link}
                  target="_blank"
                  href={buttonCVUrl}
                  variant="bordered"
                  color="primary"
                  startContent={<MdPictureAsPdf size={20} />}
                  className="w-[150px] lg:w-[180px] lg:text-medium lg:gap-3 lg:h-12"
                  radius="full"
                >
                  {buttonCVLabel}
                </Button>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex justify-center gap-2 lg:gap-4"
              >
                <Button
                  as={Link}
                  target="_blank"
                  href={GITHUB_URL}
                  isIconOnly
                  variant="light"
                  size="lg"
                  color="primary"
                  radius="full"
                  className="lg:min-w-14 lg:w-14 lg:h-14"
                >
                  <FaGithub size={30} className="lg:h-9 lg:w-9" />
                </Button>
                <Button
                  as={Link}
                  target="_blank"
                  href={LINKEDIN_URL}
                  isIconOnly
                  variant="light"
                  size="lg"
                  color="primary"
                  radius="full"
                  className="lg:min-w-14 lg:w-14 lg:h-14"
                >
                  <FaLinkedinIn size={30} className="lg:h-9 lg:w-9" />
                </Button>
              </motion.div>
            </div>
          </div>
          <div className="mb-8 lg:-translate-y-[100px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src={"/images/jp-profile.webp"}
                alt="Jean Paul Flores Portafolio"
                width={270}
                height={270}
                className="w-[230px] h-[230px] lg:w-[280px] lg:h-[280px] object-cover rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
      <ElegantWaves />
    </>
  );
};
