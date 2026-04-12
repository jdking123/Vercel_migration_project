import en from "./en";
import fr from "./fr";
import de from "./de";
import es from "./es";
import pt from "./pt";

import type { TranslationDict, Lang } from "./types";
export { LANGUAGES } from "./types";

const translations: Record<Lang, TranslationDict> = {
    en,
    fr,
    de,
    es,
    pt,
};

export function translate(key: string, lang: Lang): string {
    return translations[lang]?.[key] ?? translations.en[key] ?? key;
}
