import { FooterText } from "@/data/footer";
import { GITHUB_URL, LINKEDIN_URL } from "@/data/globals";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { Link as LinkHero } from "@heroui/link";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

type TProps = {
  language: TLanguages;
};

export const Footer = ({ language }: TProps) => {
  const {
    contactTitle,
    copyright,
    mail,
    navigationItems,
    navigationTitle,
    title,
  } = FooterText[language];

  return (
    <footer className="bg-primary-700 dark:bg-primary-50 text-white text-sm">
      <div className="dark:bg-black/20">
        <div className="section-container px-2 grid grid-cols-1 gap-5 py-9 lg:grid-cols-3">
          <div className="flex flex-col items-center mb-5 lg:justify-center">
            <Link href={"/"}>
              <span className="iconportafoliojp-iconjp flex text-5xl xl:text-5x" />
            </Link>
            <p className="text-xl font-semibold">Jean Paul Flores</p>
            <p className="font-light text-white/70">{title}</p>
          </div>
          <div className="flex flex-col ml-10 lg:ml-24">
            <div className="text-lg font-semibold mb-2">{navigationTitle}</div>
            <div>
              <ul className="list-disc px-4">
                {navigationItems.map(({ label, url }, i) => {
                  return (
                    <li key={i} className="mb-1">
                      <LinkHero
                        underline="hover"
                        size="sm"
                        href={url}
                        className="text-white"
                      >
                        {label}
                      </LinkHero>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex flex-col ml-10 lg:ml-24">
            <div className="text-lg font-semibold mb-2">{contactTitle}</div>
            <div className="flex gap-2 ml-6 mb-1">
              <Button
                as={Link}
                href={GITHUB_URL}
                target="_blank"
                isIconOnly
                size="lg"
                color="primary"
                variant="light"
                radius="full"
                className="text-white"
              >
                <FaGithub size={30} />
              </Button>
              <Button
                as={Link}
                href={LINKEDIN_URL}
                target="_blank"
                isIconOnly
                size="lg"
                color="primary"
                variant="light"
                radius="full"
                className="text-white"
              >
                <FaLinkedin size={30} />
              </Button>
            </div>
            <div className="flex gap-2 items-center">
              <MdMail />
              <span>{mail}</span>
            </div>
          </div>
        </div>
      </div>
      <Divider className="h-[1px] bg-white/20" />
      <div className="bg-black/40">
        <div className="section-container px-2 py-4 text-center text-sm/tight text-white/70">{`© 2025 Jean Paul Flores. ${copyright}`}</div>
      </div>
    </footer>
  );
};
