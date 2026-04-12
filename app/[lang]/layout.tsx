// app/[lang]/layout.tsx (SERVER COMPONENT)

import { redirect } from "next/navigation";
import LangLayoutClient from "./LangLayoutClient";

const SUPPORTED_LANGS = ["en", "fr", "es", "de", "pt"];

export default function LangLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: string };
}) {
    const { lang } = params;

    // Validate language
    if (!SUPPORTED_LANGS.includes(lang)) {
        redirect("/en");
    }

    // ⬇️ THIS IS WHERE YOUR LINE GOES
    return <LangLayoutClient lang={lang}>{children}</LangLayoutClient>;
}
