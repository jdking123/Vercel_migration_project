import { useEffect, useState, useRef } from "react";
import { useAppRouter } from "@/hooks/useAppRouter";
import { useLanguage } from "@/lib/language";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchDialog from "@/components/SearchDialog";
import CookieConsent from "@/components/CookieConsent";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useAppRouter();
  const { lang } = useLanguage();
  const [searchOpen, setSearchOpen] = useState(false);
  const prevPath = useRef(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Route transition timing
  useEffect(() => {
    if (prevPath.current !== pathname) {
      performance.mark("route-rendered");
      try {
        performance.measure("route-transition", "route-rendered");
      } catch { /* first mark, no previous entry */ }
      prevPath.current = pathname;
    }
  }, [pathname]);

  // Ctrl+K / Cmd+K shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-sm focus:text-sm"
      >
        Skip to content
      </a>
      <Header onSearchOpen={() => setSearchOpen(true)} />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      <main id="main-content" role="main" aria-live="polite" className="flex-1 pt-24 md:pt-28">{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
