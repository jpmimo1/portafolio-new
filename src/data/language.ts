type TLanguageText = {
  [key in TLanguages]: string;
};

export const DEFAULTLANGUAGE: TLanguages = "en";

export const LISTLANGUAGES: TLanguages[] = ["en", "es"];

export const TEXTLANGUAGES: { [key in TLanguages]: TLanguageText } = {
  es: {
    es: "español",
    en: "spanish",
  },
  en: {
    es: "ingles",
    en: "english",
  },
};

export const FLAGLANGUAGES: { [KEY in TLanguages]: string } = {
  es: "es",
  en: "us",
};
