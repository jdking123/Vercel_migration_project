export type Lang = "fr" | "en" | "es" | "de" | "pt";

export const LANGUAGES: { code: Lang; label: string }[] = [
    { code: "fr", label: "Français" },
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "de", label: "Deutsch" },
    { code: "pt", label: "Português" },
];

export type TranslationDict = Record<string, string>;
