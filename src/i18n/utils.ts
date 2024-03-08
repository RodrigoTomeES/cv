import { i18n } from './config';
import { ui, defaultLang, showDefaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

type UI = typeof ui;

export declare function useTranslations<L extends keyof UI>(
  lang: L,
): {
  [K in
    | keyof UI[L]
    | keyof UI[typeof i18n.defaultLocale]]: K extends keyof UI[L]
    ? UI[L][K]
    : K extends keyof UI[typeof i18n.defaultLocale]
    ? UI[typeof i18n.defaultLocale][K]
    : never;
};

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`
  }
}
