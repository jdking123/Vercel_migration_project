"use client";

import React, { createContext, useContext, useCallback } from "react";
import { useParams, usePathname, useSearchParams, useRouter } from "next/navigation";
import { Lang, LANGUAGES, translate } from "@/lib/i18n";

interface LanguageContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const params = useParams();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const currentLang = params?.lang as string | undefined;
    const validLang = LANGUAGES.some((l: { code: Lang; label: string }) => l.code === params.lang);
    const lang: Lang = validLang ? (currentLang as Lang) : "en";

    const setLang = useCallback(
        (newLang: Lang) => {
            // Remove the old /xx prefix
            const rest = pathname.replace(/^\/[a-z]{2}(\/|$)/, "/");

            const search = searchParams.toString();
            const query = search ? `?${search}` : "";

            router.replace(`/${newLang}${rest}${query}`);
        },
        [pathname, searchParams, router]
    );

    const tFn = useCallback((key: string) => translate(key, lang), [lang]);

    return (
        <LanguageContext.Provider value={{ lang, setLang, t: tFn }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
    return ctx;
}