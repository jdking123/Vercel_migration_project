export const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "ht", label: "Kreyòl" },
  { code: "es", label: "Español" },
] as const;

export type Lang = (typeof LANGUAGES)[number]["code"];