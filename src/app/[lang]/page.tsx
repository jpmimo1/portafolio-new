import { SectionLayout } from "@/components/sectionLayout/SectionLayout";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: TLanguages }>;
}) {
  const { lang } = await params;

  return (
    <div className="flex flex-col">
      <SectionLayout
        fullPage
        title="Inicio"
        className="bg-content1"
        section="home-sec"
        language={lang}
      >
        <div></div>
      </SectionLayout>
      <SectionLayout
        fullPage
        title="Sobre mi"
        className="bg-content2"
        section="about-sec"
        language={lang}
      >
        <div></div>
      </SectionLayout>
      <SectionLayout
        fullPage
        title="Mis conocimientos"
        className="bg-content3"
        section="knowledge-sec"
        language={lang}
      >
        <div></div>
      </SectionLayout>
      <SectionLayout
        fullPage
        title="Mi experiencia"
        className="bg-content4"
        section="experience-sec"
        language={lang}
      >
        <div></div>
      </SectionLayout>
      <SectionLayout
        fullPage
        title="Mis proyectos"
        className="bg-content1"
        section="projects-sec"
        language={lang}
      >
        <div></div>
      </SectionLayout>
      <SectionLayout
        fullPage
        title="Contáctame"
        className="bg-content2"
        section="contact-sec"
        language={lang}
      >
        <div></div>
      </SectionLayout>
    </div>
  );
}
