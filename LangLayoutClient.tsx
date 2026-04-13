"use client";

import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { AuthProvider } from "@/auth/AuthProvider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function LangLayoutClient({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: string;
}) {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Nav />
        {children}
        <Footer />
      </AuthProvider>
    </LanguageProvider>
  );
}