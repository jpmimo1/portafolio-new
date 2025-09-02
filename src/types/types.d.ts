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

type TExperienceItem = {
  company: string;
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
  | "Docker";

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

type TProject = {
  id: string;
  title: string;
  description: string;
  descriptionLong: string;
  technologies: TTechnologies[];
  urlLive: string;
  urlRepository: string;
  urlProject: string;
  mainImage: string;
  gallery: string[];
  keyWords: string[];
};

type TProjectsContent = {
  title: string;
  subTitle: string;
  projects: TProject[];
};

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
