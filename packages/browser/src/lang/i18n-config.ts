import arMessages from "./ar.json";
import enMessages from "./en.json";

export const defaultLocale: "ar" | "en" = "ar";

export const locales = {
  // Arabic translation message dictionary.
  ar: {
    title: "العربية",
    messages: arMessages,
    dir: "rtl",
  },
  // English translation message dictionary.
  en: {
    title: "English",
    messages: enMessages,
    dir: "ltr",
  },
};

export type LocaleKeys = keyof typeof locales;
