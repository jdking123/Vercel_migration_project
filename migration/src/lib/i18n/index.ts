import en from "./en";
import fr from "./fr";
import de from "./de";
import es from "./es";
import pt from "./pt";
import type { TranslationDict } from "./types";

export type { TranslationDict };
export { type Lang, LANGUAGES } from "./types";

const translations: Record<string, TranslationDict> = { en, fr, de, es, pt };

export function translate(key: string, lang: string): string {
  return translations[lang]?.[key] ?? translations.en?.[key] ?? key;
}
