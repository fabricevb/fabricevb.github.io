export type Locale = "en" | "fr" | "nl";

export const LOCALES: Locale[] = ["en", "fr", "nl"];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  nl: "NL",
};

export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  nl: "Nederlands",
};

export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (LOCALES as string[]).includes(value);
}
