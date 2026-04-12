import { useCallback } from "react";
import { useLanguage } from "@/lib/language";

/**
 * Returns a function that prepends the current lang prefix to a path.
 * Usage: const langTo = useLangPath(); <Link to={langTo("/about")} />
 */
export function useLangPath() {
  const { lang } = useLanguage();
  return useCallback(
    (path: string) => `/${lang}${path.startsWith("/") ? path : `/${path}`}`,
    [lang]
  );
}
