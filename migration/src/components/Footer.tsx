import { useState } from "react";
import { useLanguage } from "@/lib/language";
import { useAppRouter } from "@/hooks/useAppRouter";
import { useLangPath } from "@/hooks/useLangPath";
import { AppLink } from "@/components/AppLink";
import { Linkedin, ArrowUp, Mail } from "lucide-react";
import { toast } from "sonner";
import { LANGUAGES } from "@/lib/i18n";
import { track } from "@/lib/analytics";
import { env } from "@/lib/env";
import logo from "@/assets/logo.png";

export default function Footer() {
  const { t, lang, setLang } = useLanguage();
  const langTo = useLangPath();
  const router = useAppRouter();
  const [nlEmail, setNlEmail] = useState("");
  const [nlLoading, setNlLoading] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const pathWithoutLang = router.pathname.replace(/^\/[a-z]{2}(\/|$)/, "/");

  return (
    <footer role="contentinfo" className="bg-primary text-primary-foreground">
      {/* Newsletter banner */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-6 py-10 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="font-serif font-bold text-base">{t("footer.newsletter")}</p>
                <p className="text-xs text-primary-foreground/70">{t("footer.newsletter.desc")}</p>
              </div>
            </div>
            <form onSubmit={async (e) => {
              e.preventDefault();
              if (!nlEmail) return;
              setNlLoading(true);
              try {
                if (env.SUPABASE_URL) {
                  const res = await fetch(`${env.SUPABASE_URL}/functions/v1/newsletter-signup`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json", apikey: env.SUPABASE_KEY ?? "" },
                    body: JSON.stringify({ email: nlEmail }),
                  });
                  if (!res.ok) throw new Error();
                }
                track({ name: "newsletter_subscribe", props: { lang } });
                toast.success(t("footer.subscribed"));
                setNlEmail("");
              } catch {
                toast.error(t("footer.subscribe.error"));
              } finally {
                setNlLoading(false);
              }
            }} className="flex w-full md:w-auto">
              <label htmlFor="footer-newsletter-email" className="sr-only">{t("footer.newsletter.placeholder")}</label>
              <input
                id="footer-newsletter-email"
                type="email"
                value={nlEmail}
                onChange={(e) => setNlEmail(e.target.value)}
                placeholder={t("footer.newsletter.placeholder")}
                required
                aria-label={t("footer.newsletter.placeholder")}
                className="flex-1 md:w-64 bg-primary-foreground/5 border border-primary-foreground/15 border-r-0 rounded-l-sm px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:bg-primary-foreground/10 transition-colors"
              />
              <button type="submit" disabled={nlLoading} className="bg-gold text-accent-foreground font-semibold text-sm px-5 py-2.5 rounded-r-sm hover:bg-gold-light transition-colors whitespace-nowrap disabled:opacity-50">
                {nlLoading ? "..." : t("footer.newsletter.subscribe")}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* Column 1: Logo + tagline */}
          <div className="space-y-4">
            <img alt="JD Product Stewardship Foundation" className="h-20 md:h-24 object-contain brightness-200" src={logo} loading="lazy" decoding="async" />
            <p className="text-sm text-primary-foreground/80 max-w-xs leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Column 2: Resources */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold-light">{t("footer.col.resources")}</p>
            <nav aria-label="Footer resources" className="flex flex-col gap-2">
              <AppLink to={langTo("/resources")} className="text-sm text-primary-foreground/75 hover:text-primary-foreground transition-colors py-1">
                {t("nav.resources")}
              </AppLink>
            </nav>
          </div>

          {/* Column 3: Organization */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold-light">{t("footer.col.organization")}</p>
            <nav aria-label="Footer organization" className="flex flex-col gap-2">
              <AppLink to={langTo("/about")} className="text-sm text-primary-foreground/75 hover:text-primary-foreground transition-colors py-1">
                {t("nav.about")}
              </AppLink>
              <AppLink to={langTo("/services")} className="text-sm text-primary-foreground/75 hover:text-primary-foreground transition-colors py-1">
                {t("nav.services")}
              </AppLink>
            </nav>
          </div>

          {/* Column 4: Connect */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold-light">{t("footer.col.connect")}</p>
            <nav aria-label="Footer connect" className="flex flex-col gap-2">
              <AppLink to={langTo("/contact")} className="text-sm text-primary-foreground/75 hover:text-primary-foreground transition-colors py-1">
                {t("nav.contact")}
              </AppLink>
              <a href="https://linkedin.com/company/jdpsf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-foreground/75 hover:text-primary-foreground transition-colors py-1">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a href="mailto:info@jdproductstewardshipfoundation.org" className="flex items-center gap-2 text-sm text-primary-foreground/75 hover:text-primary-foreground transition-colors py-1">
                <Mail className="w-4 h-4" />
                Email
              </a>
            </nav>
          </div>
        </div>

        {/* Language alternatives */}
        <div className="border-t border-primary-foreground/10 mt-10 pt-6">
          <nav aria-label="Language alternatives" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="text-xs text-primary-foreground/50 mr-1">{t("footer.language.label")}</span>
            {LANGUAGES.map((l) => (
              <a
                key={l.code}
                href={`/${l.code}${pathWithoutLang === "/" ? "" : pathWithoutLang}`}
                hrefLang={l.code}
                onClick={(e) => { e.preventDefault(); setLang(l.code); }}
                className={`text-xs py-2 px-1 min-h-[44px] inline-flex items-center transition-colors ${l.code === lang ? "text-gold font-semibold" : "text-primary-foreground/60 hover:text-primary-foreground"}`}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-primary-foreground/10 mt-6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-primary-foreground/60">
            <span>© {new Date().getFullYear()} JD Product Stewardship Foundation. {t("footer.rights")}</span>
            <span className="hidden sm:inline">·</span>
            <AppLink to={langTo("/privacy")} className="py-2 px-1 min-h-[44px] inline-flex items-center hover:text-primary-foreground transition-colors">{t("nav.privacy")}</AppLink>
            <span>·</span>
            <AppLink to={langTo("/terms")} className="py-2 px-1 min-h-[44px] inline-flex items-center hover:text-primary-foreground transition-colors">{t("nav.terms")}</AppLink>
            <span>·</span>
            <AppLink to={langTo("/accessibility")} className="py-2 px-1 min-h-[44px] inline-flex items-center hover:text-primary-foreground transition-colors">{t("nav.accessibility")}</AppLink>
            <span>·</span>
            <button onClick={() => window.dispatchEvent(new Event("open-cookie-consent"))} className="py-2 px-1 min-h-[44px] inline-flex items-center hover:text-primary-foreground transition-colors">{t("cookie.preferences")}</button>
          </div>
          <button onClick={scrollToTop} aria-label={t("footer.backtotop")} className="flex items-center gap-1.5 text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors py-2 min-h-[44px]">
            <ArrowUp className="w-3.5 h-3.5" />
            {t("footer.backtotop")}
          </button>
        </div>
      </div>
    </footer>
  );
}
