"use client";

import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { AuthProvider } from "@/auth/AuthProvider";
import Layout from "@/layouts/Layout";
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
                <Layout>
                    <Nav lang={lang} />
                    {children}
                    <Footer lang={lang} />
                </Layout>
            </AuthProvider>
        </LanguageProvider>
    );
}
