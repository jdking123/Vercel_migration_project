// app/[lang]/layout.tsx

import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import LangLayoutClient from "./LangLayoutClient";

const SUPPORTED_LANGS = ["en", "fr", "es", "de", "pt"];

export default function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  const { lang } = params;

  if (!SUPPORTED_LANGS.includes(lang)) {
    redirect("/en");
  }

  return <LangLayoutClient lang={lang}>{children}</LangLayoutClient>;
}