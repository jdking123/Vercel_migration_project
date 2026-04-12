import { useLanguage } from "@/lib/language";
import { useLangPath } from "@/hooks/useLangPath";
import { AppLink } from "@/components/AppLink";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { CANONICAL_DOMAIN } from "@/lib/constants";
import { ShieldCheck, Radar, GraduationCap, ArrowRight, type LucideIcon } from "lucide-react";

const pillarConfig: { icon: LucideIcon; resourceCategory: string }[] = [
  { icon: ShieldCheck, resourceCategory: "core-resources" },
  { icon: Radar, resourceCategory: "sector-insights" },
  { icon: GraduationCap, resourceCategory: "professional-development" },
];

export default function Services() {
  const { t, lang } = useLanguage();
  const langTo = useLangPath();

  return (
    <>
      <SEOHead
        title={t("seo.services.title")}
        description={t("seo.services.desc")}
        canonical={`${CANONICAL_DOMAIN}/${lang}/services`}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Product Stewardship Services",
            description: t("seo.services.desc"),
            url: `${CANONICAL_DOMAIN}/${lang}/services`,
            inLanguage: lang,
            provider: { "@type": "Organization", name: "JD Product Stewardship Foundation", url: CANONICAL_DOMAIN },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: t("nav.home"), item: `${CANONICAL_DOMAIN}/${lang}` },
              { "@type": "ListItem", position: 2, name: t("nav.services"), item: `${CANONICAL_DOMAIN}/${lang}/services` },
            ],
          },
        ]}
      />

      <PageHero
        breadcrumbs={[{ label: t("nav.home"), to: "/" }, { label: t("nav.services") }]}
        label={t("nav.services")}
        title={t("services.hero.title")}
        subtitle={t("services.intro")}
      />

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-8 break-words">
            {t("services.intro.heading")}
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-justify">
            <p>{t("services.intro.body1")}</p>
            <p>{t("services.intro.body2")}</p>
            <p>{t("services.intro.body3")}</p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      {([1, 2, 3] as const).map((n) => {
        const cfg = pillarConfig[n - 1];
        return (
          <section key={n} id={`pillar-${n}`} className={`section-padding ${n % 2 === 1 ? "bg-card" : "bg-background"}`}>
            <div className="container mx-auto max-w-3xl">
              <SectionHeading icon={cfg.icon} title={t(`services.pillar${n}.title`)} showDivider />
              <p className="text-muted-foreground leading-relaxed mb-10 break-words text-justify">
                {t(`services.pillar${n}.desc`)}
              </p>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-6">
                {t(`services.pillar${n}.included`)}
              </p>
              <ul className="space-y-4 list-disc list-outside ml-5 marker:text-gold">
                {[1, 2, 3, ...(n < 3 ? [4] : [])].map((item) => (
                  <li key={item} className="text-muted-foreground leading-relaxed break-words">
                    {t(`services.pillar${n}.item${item}`)}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <AppLink
                  to={langTo(`/resources#${cfg.resourceCategory}`)}
                  className="inline-flex items-center gap-1.5 text-gold text-sm font-medium hover:underline focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none rounded-sm"
                >
                  {t("services.browse.resources")} <ArrowRight className="w-4 h-4" />
                </AppLink>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-xl md:text-2xl font-serif font-bold mb-8 break-words">
            {t("services.cta.title")}
          </p>
          <Button asChild variant="gold">
            <AppLink to={langTo("/contact")}>{t("services.cta.link")}</AppLink>
          </Button>
        </div>
      </section>
    </>
  );
}
