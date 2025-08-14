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
