import { i18n } from "@/i18n/config";

export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = i18n.defaultLocale;
export const showDefaultLang = false;

export const ui = {
  es: {
    title: "Portafolio de",
    "sections.about": "Sobre mí",
    "sections.experience": "Experiencia laboral",
    "sections.education": "Educación",
    "sections.projects": "Proyectos",
    "sections.skills": "Habilidades",
  },
  en: {
    title: "Portfolio of",
    "sections.about": "About me",
    "sections.experience": "Work Experience",
    "sections.education": "Education",
    "sections.projects": "Projects",
    "sections.skills": "Skills",
  },
} as const;
