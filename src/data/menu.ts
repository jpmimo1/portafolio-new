export const MenuItems: { [key in TLanguages]: TMenuItem[] } = {
  es: [
    {
      icon: "home",
      label: "Inicio",
      url: "#inicio",
      key: "home-sec",
    },
    {
      icon: "about",
      label: "Sobre mi",
      url: "#sobre-mi",
      key: "about-sec",
    },
    {
      icon: "knowledge",
      label: "Mis conocimientos",
      url: "#conocimientos",
      key: "knowledge-sec",
    },
    {
      icon: "experience",
      label: "Mi experiencia",
      url: "#experiencia",
      key: "experience-sec",
    },
    {
      icon: "projects",
      label: "Mis proyectos",
      url: "#proyectos",
      key: "projects-sec",
    },
    {
      icon: "contact",
      label: "Contáctame",
      url: "#contacto",
      key: "contact-sec",
    },
  ],
  en: [
    {
      icon: "home",
      label: "Home",
      url: "#home",
      key: "home-sec",
    },
    {
      icon: "about",
      label: "About me",
      url: "#about-me",
      key: "about-sec",
    },
    {
      icon: "knowledge",
      label: "My knowledge",
      url: "#knowledge",
      key: "knowledge-sec",
    },
    {
      icon: "experience",
      label: "My experience",
      url: "#experience",
      key: "experience-sec",
    },
    {
      icon: "projects",
      label: "My projects",
      url: "#projects",
      key: "projects-sec",
    },
    {
      icon: "contact",
      label: "Contact me",
      url: "#contact",
      key: "contact-sec",
    },
  ],
};

export const MenuLanguages: { [key in TLanguages]: TMenuLanguage } = {
  es: {
    title: "Idiomas",
    items: [
      { key: "es", label: "Español" },
      { key: "en", label: "Ingles" },
    ],
  },
  en: {
    title: "Languages",
    items: [
      { key: "es", label: "Spanish" },
      { key: "en", label: "English" },
    ],
  },
};
