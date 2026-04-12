"use client";

import { useLanguage } from "@/lib/language";
import { usePathname } from "next/navigation";

export function useLangPath() {
    const { lang } = useLanguage();
    const pathname = usePathname();

    const langTo = (path: string) => {
        const clean = path.startsWith("/") ? path : `/${path}`;
        return `/${lang}${clean}`;
    };

    const stripLang = () => {
        return pathname.replace(/^\/[a-z]{2}(\/|$)/, "/");
    };

    return { langTo, stripLang };
}