import type { Metadata } from "next";
import "./globals.css";

import { Providers } from "./providers";
import Header from "@/components/Header";
import { AuthProvider } from "@/auth/AuthProvider";

export const metadata: Metadata = {
  title: "JD Product Stewardship Foundation",
  description: "Institutional platform for stewardship, governance, and lifecycle intelligence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground min-h-screen antialiased">
        <AuthProvider>
          <Providers>
            <Header />
            <main className="pt-24 md:pt-28">{children}</main>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
