import { useMemo } from "react";
import { useLanguage } from "@/lib/language";
import { useLangPath } from "@/hooks/useLangPath";
import { AppLink } from "@/components/AppLink";
import { Waypoints, Network, UsersRound, ArrowRight, Briefcase, Landmark, Handshake, HardHat } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { CANONICAL_DOMAIN } from "@/lib/constants";
const heroBgFallback = "/hero-bg.png";

export default function Home() {
  const { t, lang } = useLanguage();
  const langTo = useLangPath();

  const audiencePaths = useMemo(() => [
    { icon: HardHat, label: t("home.audience.practitioners"), to: "/resources" },
    { icon: Briefcase, label: t("home.audience.employers"), to: "/services#pillar-1" },
    { icon: Landmark, label: t("home.audience.regulators"), to: "/resources" },
    { icon: Handshake, label: t("home.audience.partners"), to: "/contact" },
  ], [lang, t]);

  const pillars = useMemo(() => [
    { icon: Waypoints, title: t("home.pillar1.title"), tagline: t("home.pillar1.tagline"), to: "/services#pillar-1" },
    { icon: Network, title: t("home.pillar2.title"), tagline: t("home.pillar2.tagline"), to: "/services#pillar-2" },
    { icon: UsersRound, title: t("home.pillar3.title"), tagline: t("home.pillar3.tagline"), to: "/services#pillar-3" },
  ], [lang, t]);

  const jsonLd = useMemo(() => [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "JD Product Stewardship Foundation",
      legalName: "JD Product Stewardship Foundation",
      url: CANONICAL_DOMAIN,
      description: t("seo.home.desc"),
      foundingDate: "2024",
      foundingLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Montreal", addressRegion: "QC", addressCountry: "CA" } },
      address: { "@type": "PostalAddress", addressLocality: "Montreal", addressRegion: "QC", addressCountry: "CA" },
      email: "info@jdproductstewardshipfoundation.org",
      inLanguage: lang,
      sameAs: ["https://linkedin.com/company/jdpsf"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "JD Product Stewardship Foundation",
      url: `${CANONICAL_DOMAIN}/${lang}`,
      inLanguage: lang,
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${CANONICAL_DOMAIN}/${lang}/resources?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: lang,
      mainEntity: [{ "@type": "Question", name: t("home.definition.title"), acceptedAnswer: { "@type": "Answer", text: t("home.definition.text") } }],
    },
    {
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      name: t("home.definedterm.name"),
      description: t("home.definition.text"),
      inDefinedTermSet: CANONICAL_DOMAIN,
    },
  ], [lang, t]);

  return (
    <>
      <SEOHead
        title={t("seo.home.title")}
        description={t("seo.home.desc")}
        canonical={`${CANONICAL_DOMAIN}/${lang}`}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <picture>
            <img src={heroBgFallback} alt="" role="presentation" className="w-full h-full object-cover" width={1536} height={1024} {...{ fetchpriority: "high" } as any} />
          </picture>
          <div className="absolute inset-y-0 left-0 w-full md:w-3/4 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="absolute inset-0 hero-text-backdrop pointer-events-none" />
        <div className="relative container mx-auto px-6 py-28 md:py-36">
          <div className="max-w-3xl animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-px bg-gold" />
              <span className="text-gold text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-[0.2em]" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8), 0 0 20px rgba(212,175,55,0.4)' }}>
                JD Product Stewardship Foundation
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6 break-words" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.9)' }}>
              {t("hero.title")}
            </h1>
            <p className="text-base md:text-xl text-white/90 leading-[1.8] mb-12 max-w-2xl break-words text-justify" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
              {t("hero.subtitle")}
            </p>
            <Button asChild variant="gold" size="cta">
              <AppLink to={langTo("/resources")}>
                {t("hero.cta")} <ArrowRight className="w-4 h-4" />
              </AppLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Audience Segmentation */}
      <section className="bg-background border-b border-border">
        <div className="container mx-auto px-6 py-10 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
            {audiencePaths.map((path) => (
              <AppLink key={path.to + path.label} to={langTo(path.to)} className="flex flex-col items-center gap-3 py-5 px-4 rounded-sm bg-card border border-border hover:border-gold/30 hover:shadow-sm transition-all group">
                <div className="w-11 h-11 rounded-sm bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <path.icon className="w-5 h-5 text-gold" />
                </div>
                <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                  {path.label}
                </span>
              </AppLink>
            ))}
          </div>
        </div>
      </section>

      {/* Definition */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 break-words">
            {t("home.definition.title")}
          </h2>
          <blockquote className="border-l-4 border-gold/40 pl-6 text-left">
            <p className="text-muted-foreground leading-relaxed text-lg break-words italic text-justify">
              {t("home.definition.text")}
            </p>
          </blockquote>
        </div>
      </section>

      {/* Mission + Pillars */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">{t("mission.label")}</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-6 break-words">{t("mission.title")}</h2>
            <p className="text-muted-foreground leading-relaxed text-lg break-words text-justify">{t("mission.desc")}</p>
          </div>

          <div className="text-center mb-12">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">{t("pillars.label")}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {pillars.map((pillar) => (
              <AppLink key={pillar.to} to={langTo(pillar.to)} className="bg-background border border-border p-6 md:p-8 lg:p-10 rounded-sm hover:shadow-lg transition-shadow group block">
                <div className="mb-5">
                  <div className="w-14 h-14 bg-gold/10 rounded-sm flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <pillar.icon className="w-7 h-7 text-gold" />
                  </div>
                </div>
                <div className="w-10 h-px bg-gold/30 mb-4" />
                <h3 className="text-xl font-serif font-bold text-foreground mb-3 break-words" lang={lang} style={{ hyphens: 'auto' }}>{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed break-words mb-4">{pillar.tagline}</p>
                <span className="inline-flex items-center gap-1 text-gold text-sm font-medium group-hover:underline">
                  {t("nav.services")} <ArrowRight className="w-4 h-4" />
                </span>
              </AppLink>
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="resources" />
    </>
  );
}
