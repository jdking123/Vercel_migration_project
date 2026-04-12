import React, { createContext, useContext, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useAppRouter } from "@/hooks/useAppRouter";
import { Lang, LANGUAGES, translate } from "@/lib/i18n";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const params = useParams<{ lang?: string }>();
  const router = useAppRouter();

  const validLang = LANGUAGES.some(l => l.code === params.lang);
  const lang: Lang = validLang ? (params.lang as Lang) : "en";

  const setLang = useCallback((newLang: Lang) => {
    const rest = router.pathname.replace(/^\/[a-z]{2}(\/|$)/, "/");
    router.replace(`/${newLang}${rest === "/" ? "" : rest}${router.search}${router.hash}`);
  }, [router]);

  const tFn = useCallback((key: string) => translate(key, lang), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: tFn }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
