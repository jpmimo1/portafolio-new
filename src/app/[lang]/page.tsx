import { BackgroundHome } from "@/components/BackgroundHome";
import { SectionLayout } from "@/components/sectionLayout/SectionLayout";
import { AboutSection } from "@/components/sections/about/AboutSection";
import { ContactSection } from "@/components/sections/contact/ContactSection";
import { ExperienceSection } from "@/components/sections/experience/ExperienceSection";
import { HomeSection } from "@/components/sections/home/HomeSection";
import { ProjectsSection } from "@/components/sections/projects/ProjectsSection";
import { SkillsSection } from "@/components/sections/skills/SkillsSection";
import { AboutText } from "@/data/about";
import { ContactText } from "@/data/contact";
import { ExpereinceText } from "@/data/experience";
import { LISTLANGUAGES } from "@/data/language";
import { ProjectsText } from "@/data/projects";
import { SkillsText } from "@/data/skills";
import { Metadata } from "next";

const DOMAIN_URL = process.env.DOMAIN_URL as string;

type TParams = {
  lang: TLanguages;
};

type TMetadata = {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
};

const metadataLanguage: { [key in TLanguages]: TMetadata } = {
  es: {
    title: "Jean Paul Flores | Desarrollador Full Stack",
    description:
      "Soy Jean Paul Flores, desarrollador full stack especializado en React, Next.js, Node.js y PostgreSQL. Creo aplicaciones web modernas, escalables y de alto rendimiento.",
    keywords:
      "Jean Paul Flores, Jean Paul Flores Auquimayta, desarrollador full stack, React, Next.js, Node.js, PostgreSQL, portafolio, proyectos web",
    ogTitle: "Jean Paul Flores | Portafolio Full Stack Developer",
    ogDescription:
      "Explora mis proyectos y experiencia en desarrollo web con tecnologías modernas como React, Next.js, Node.js y PostgreSQL.",
    ogImage: "/images/screenshots/screenshot-es.png",
    ogUrl: `${DOMAIN_URL}/es`,
  },
  en: {
    title: "Jean Paul Flores | Full Stack Developer",
    description:
      "I am Jean Paul Flores, a full stack developer specialized in React, Next.js, Node.js, and PostgreSQL. I build modern, scalable, and high-performance web applications.",
    keywords:
      "Jean Paul Flores, Jean Paul Flores Auquimayta, full stack developer, React, Next.js, Node.js, PostgreSQL, portfolio, web projects",
    ogTitle: "Jean Paul Flores | Full Stack Developer Portfolio",
    ogDescription:
      "Discover my projects and experience in web development with modern technologies like React, Next.js, Node.js, and PostgreSQL.",
    ogImage: "/images/screenshots/screenshot-en.png",
    ogUrl: `${DOMAIN_URL}/en`,
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<TParams>;
}): Promise<Metadata> {
  const { lang } = await params;

  const {
    title,
    description,
    keywords,
    ogDescription,
    ogImage,
    ogTitle,
    ogUrl,
  } = metadataLanguage[lang];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      images: ogImage,
      url: ogUrl,
    },
  };
}

export async function generateStaticParams() {
  const languages = LISTLANGUAGES;

  const params: TParams[] = languages.map((lang) => ({ lang }));

  return params;
}

export default async function Home({ params }: { params: Promise<TParams> }) {
  const { lang } = await params;
  if (!lang) return null;

  const aboutTitle = AboutText[lang].title;
  const skillsTitle = SkillsText[lang].title;
  const experienceTitle = ExpereinceText[lang].title;
  const projectsTitle = ProjectsText[lang].title;
  const contactTitle = ContactText[lang].title;

  return (
    <div className="flex flex-col">
      <BackgroundHome language={lang} />
      <SectionLayout
        className="lg:h-[calc(100vh-var(--header-height-lg))] xl:h-[calc(100vh-var(--header-height-xl))]"
        section="home-sec"
        language={lang}
        sectionStandad={false}
      >
        <HomeSection language={lang} />
      </SectionLayout>
      <SectionLayout
        title={aboutTitle}
        section="about-sec"
        language={lang}
        classNames={{ title: "text-primary-600" }}
        divider
      >
        <AboutSection language={lang} />
      </SectionLayout>
      <SectionLayout
        title={skillsTitle}
        section="knowledge-sec"
        language={lang}
        divider
      >
        <SkillsSection language={lang} />
      </SectionLayout>
      <SectionLayout
        title={experienceTitle}
        section="experience-sec"
        language={lang}
        divider
      >
        <ExperienceSection language={lang} />
      </SectionLayout>
      <SectionLayout
        title={projectsTitle}
        section="projects-sec"
        language={lang}
        divider
      >
        <ProjectsSection language={lang} />
      </SectionLayout>
      <SectionLayout
        title={contactTitle}
        section="contact-sec"
        language={lang}
        divider
      >
        <ContactSection language={lang} />
      </SectionLayout>
    </div>
  );
}
