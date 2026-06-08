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
import { ExperienceText } from "@/data/experience";
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
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
};

const metadataLanguage: { [key in TLanguages]: TMetadata } = {
  es: {
    title: "Jean Paul Flores | Ingeniero de Software Full-Stack",
    description:
      "Ingeniero de Software Full-Stack especializado en el ecosistema TypeScript (React, Next.js, NestJS, PostgreSQL). Diseño arquitecturas escalables y SaaS.",
    keywords:
      "Jean Paul Flores, Ingeniero de Software, Desarrollador Full-Stack, TypeScript, React, Next.js, NestJS, PostgreSQL, Node.js, Arquitectura SaaS, Microservicios, Docker",
    ogTitle: "Jean Paul Flores | Portafolio de Ingeniería de Software",
    ogDescription:
      "Explora mi experiencia y proyectos. Especializado en diseñar plataformas SaaS, microservicios y arquitecturas escalables con TypeScript y Node.js.",
    ogImage: "/images/screenshots/screenshot-es.png",
    ogUrl: `${DOMAIN_URL}/es`,
    twitterCard: "summary_large_image",
    twitterTitle: "Jean Paul Flores | Ingeniero de Software",
    twitterDescription:
      "Explora mi experiencia y proyectos en arquitecturas escalables con TypeScript y Node.js.",
    twitterImage: "/images/screenshots/screenshot-es.png",
  },
  en: {
    title: "Jean Paul Flores | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in the TypeScript ecosystem (React, Next.js, NestJS, PostgreSQL). I design scalable architectures and SaaS.",
    keywords:
      "Jean Paul Flores, Software Engineer, Full-Stack Developer, TypeScript, React, Next.js, NestJS, PostgreSQL, Node.js, SaaS Architecture, Microservices, Docker",
    ogTitle: "Jean Paul Flores | Software Engineering Portfolio",
    ogDescription:
      "Explore my experience and projects. Specialized in building SaaS platforms, microservices, and scalable architectures with TypeScript and Node.js.",
    ogImage: "/images/screenshots/screenshot-en.png",
    ogUrl: `${DOMAIN_URL}/en`,
    twitterCard: "summary_large_image",
    twitterTitle: "Jean Paul Flores | Software Engineer",
    twitterDescription:
      "Explore my experience and projects in scalable architectures with TypeScript and Node.js.",
    twitterImage: "/images/screenshots/screenshot-en.png",
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
    twitterTitle,
    twitterDescription,
    twitterImage,
  } = metadataLanguage[lang];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: ogUrl,
      siteName: "Jean Paul Flores Portfolio",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
      locale: lang === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: twitterTitle,
      description: twitterDescription,
      images: [twitterImage],
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
  const experienceTitle = ExperienceText[lang].title;
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
