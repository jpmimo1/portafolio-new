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
import { ProjectsText } from "@/data/projects";
import { SkillsText } from "@/data/skills";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: TLanguages }>;
}) {
  const { lang } = await params;

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
