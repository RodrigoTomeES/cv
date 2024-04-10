import { i18n } from "@/i18n/config";

export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = i18n.defaultLocale;
export const showDefaultLang = i18n.routing.prefixDefaultLocale;

export type LConfP = Record<
  string,
  | string
  | ((props: never) => string)
>;

type LConf = { [K in (typeof i18n)["defaultLocale"]]: LConfP } & Record<
  string,
  LConfP
>;

export const ui = {
  es: {
    title: ({ name, label }: { name: string, label: string }) => `CV de ${name} - ${label}`,
    "sections.about": "Sobre mí",
    "sections.experience": "Experiencia laboral",
    "sections.education": "Educación",
    "sections.projects": "Proyectos",
    "sections.skills": "Habilidades",
    "common.present": "Actual",
    "common.seeLink": ({ link }: { link: string }) => `Ver ${link}`,
    "see.email": ({ name, email }: { name: string, email: string }) => `Enviar un correo electrónico a ${name} al correo ${email}`,
    "see.phone": ({ name, phone }: { name: string, phone: string }) => `Llamar por teléfono a ${name} al número ${phone}`,
    "see.network": ({ name, network }: { name: string, network: string }) => `Visitar el perfil de ${name} en ${network}`,
    "see.project": ({ name }: { name: string }) => `Ver el proyecto ${name}`,
    "see.source": ({ name }: { name: string }) => `Ver código fuente del proyecto ${name}`,
  },
  en: {
    title: ({ name, label }: { name: string, label: string }) => `${name}'s CV - ${label}`,
    "sections.about": "About me",
    "sections.experience": "Work Experience",
    "sections.education": "Education",
    "sections.projects": "Projects",
    "sections.skills": "Skills",
    "common.present": "Present",
    "common.seeLink": ({ link }: { link: string }) => `See ${link}`,
    "see.email": ({ name, email }: { name: string, email: string }) => `Send an email to ${name} at ${email}`,
    "see.phone": ({ name, phone }: { name: string, phone: string }) => `Call ${name} at ${phone}`,
    "see.network": ({ name, network }: { name: string, network: string }) => `Visit ${name}'s profile on ${network}`,
    "see.project": ({ name }: { name: string }) => `See the project ${name}`,
    "see.source": ({ name }: { name: string }) => `See the source code of the project ${name}`,
  },
} satisfies LConf;
