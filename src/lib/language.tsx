"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export type SupportedLang = "en" | "fr" | "ht" | "es";

const DEFAULT_LANG: SupportedLang = "en";

interface LanguageContextValue {
    lang: SupportedLang;
    t: (key: string) => string;
    setLang: (lang: SupportedLang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();

    const initialLang = (() => {
        if (!pathname) return DEFAULT_LANG;
        const match = pathname.match(/^\/([a-z]{2})(\/|$)/);
        return (match?.[1] as SupportedLang) || DEFAULT_LANG;
    })();

    const [lang, setLangState] = useState<SupportedLang>(initialLang);

    const setLang = (newLang: SupportedLang) => {
        setLangState(newLang);

        if (!pathname) return;

        const cleanPath = pathname.replace(/^\/[a-z]{2}(\/|$)/, "/");
        router.push(`/${newLang}${cleanPath}`);
    };

    const t = (key: string) => key;

    return (
        <LanguageContext.Provider value={{ lang, t, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error("useLanguage must be used inside <LanguageProvider>");
    }
    return ctx;
}
