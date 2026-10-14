type TLanguages = "es" | "en";

type TSectionsPage =
  | "home-sec"
  | "about-sec"
  | "knowledge-sec"
  | "experience-sec"
  | "projects-sec"
  | "contact-sec";

type TIconsMenu =
  | "home"
  | "about"
  | "knowledge"
  | "experience"
  | "projects"
  | "contact";

type TMenuItem = {
  label: string;
  icon: TIconsMenu;
  url: string;
  key: TSectionsPage;
};

type TMenuItemLanguage = {
  key: TLanguages;
  label: string;
};

type TMenuLanguage = {
  title: string;
  items: TMenuItemLanguage[];
};

type THomeContent = {
  mainText1: string;
  mainText2: string;
  secondText: string;
  thirdText: string;
  description: string;
  buttonCVLabel: string;
  buttonCVUrl: string;
  buttonContactLabel: string;
  buttonContactUrl: string;
};

type TAboutContent = {
  title: string;
  subTitle: string;
  content: string;
  buttonAction1Label: string;
  buttonAction1Url: string;
  buttonAction2Label: string;
  buttonAction2Url: string;
};

type TBackgroungSection = {
  id: TSectionsPage;
  background: { dark: string; light: string };
};

type TSkillGroups = "frontend" | "backend" | "databases" | "tools";

type TSkillItem = {
  name: string;
  url: string;
};

type TSkillGroup = { label: string; items: TSkillItem[] };

type TSkillsContent = {
  title: string;
  subTitle: string;
  groups: { [key in TSkillGroups]: TSkillGroup };
};

type TWorkModality = "remote" | "onsite" | "hybrid" | "";

type TExperienceItem = {
  company: string;
  modality: TWorkModality;
  position: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
};

type TExperience = {
  title: string;
  subTitle: string;
  history: TExperienceItem[];
};

type TTechnologies =
  | "React"
  | "Next.js"
  | "NestJS"
  | "TypeScript"
  | "Node.js"
  | "shadcn/ui"
  | "Zustand"
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "Tailwind CSS"
  | "Express"
  | "Prisma ORM"
  | "PostgreSQL"
  | "MySQL"
  | "MongoDB"
  | "Git"
  | "GitHub"
  | "VSCode"
  | "Postman"
  | "SQL Server"
  | "Python"
  | "HeroUI"
  | "Docker"
  | "Redis"
  | "BullMQ"
  | "FFmpeg"
  | "Cloudflare R2"
  | "Clerk"
  | "Linux VPS";

type TTechnologiesFormat = {
  label: TTechnologies;
  dark: {
    backgroundColor: string;
    textColor: string;
  };
  light: {
    backgroundColor: string;
    textColor: string;
  };
};

type TProjectDecision = {
  title: string;
  description: string;
};

type TProjectFeature = {
  title: string;
  description: string;
};

type TProjectDetails = {
  overview: string;
  problem: string;
  responsibilities: string[];
  features: TProjectFeature[];
  technicalDecisions: TProjectDecision[];
  deployment: string;
};

type TProjectImage = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
};

// Source data: a single image with text in both languages.
type TProjectImageSource = {
  id: string;
  src: string;
  alt: Record<TLanguages, string>;
  caption?: Record<TLanguages, string>;
};

type TProject = {
  id: string;

  // Presentation: reusable in cards and the detail page.
  title: string;
  subtitle: string;
  category: string;
  description: string;
  role: string;
  contribution: string;

  // Short selection for cards and full list for the detail page.
  featuredTechnologies: TTechnologies[];
  technologies: TTechnologies[];

  // Expanded content.
  details: TProjectDetails;

  // Navigation.
  urlLive: string;
  urlRepository?: string;
  urlProject: string;

  // Images.
  coverImageId: string;
  gallery: TProjectImage[];

  // Metadata.
  seo: {
    title: string;
    description: string;
  };
  keyWords: string[];
};

type TProjectsLabels = {
  viewProject: string;
  viewAllProjects: string;
  openApp: string;
  sourceCode: string;
  contribution: string;
  role: string;
  overview: string;
  problem: string;
  responsibilities: string;
  features: string;
  technicalDecisions: string;
  deployment: string;
  technologies: string;
  gallery: string;
  galleryImage: string;
  previousImage: string;
  nextImage: string;
  openImage: string;
  closeGallery: string;
  pauseGallery: string;
  playGallery: string;
  relatedProjects: string;
  backToProjects: string;
};

type TProjectsContent = {
  title: string;
  subTitle: string;
  labels: TProjectsLabels;
  projects: TProject[];
};

type TProjectShared = Pick<
  TProject,
  | "id"
  | "featuredTechnologies"
  | "technologies"
  | "urlLive"
  | "urlRepository"
  | "coverImageId"
>;

type TFormInput = {
  label: string;
  placeholder: string;
};

type TContactContent = {
  title: string;
  subTitle: string;
  form: {
    name: TFormInput;
    email: TFormInput;
    message: TFormInput;
    send: TFormInput;
  };
};

type TItemNavigationFooter = {
  label: string;
  url: string;
};

type TFooter = {
  title: string;
  navigationTitle: string;
  navigationItems: TItemNavigationFooter[];
  contactTitle: string;
  mail: string;
  copyright: string;
};
