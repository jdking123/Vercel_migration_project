import { useLanguage } from "@/lib/language";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { CANONICAL_DOMAIN } from "@/lib/constants";
import { File } from "lucide-react";

export default function Resources() {
  const { t, lang } = useLanguage();

  return (
    <>
      <SEOHead
        title={t("seo.resources.title")}
        description={t("seo.resources.desc")}
        canonical={`${CANONICAL_DOMAIN}/${lang}/resources`}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Resources – JD Product Stewardship Foundation",
            description: t("seo.resources.desc"),
            url: `${CANONICAL_DOMAIN}/${lang}/resources`,
            inLanguage: lang,
            publisher: { "@type": "Organization", name: "JD Product Stewardship Foundation" },
          },
        ]}
      />

      <PageHero
        breadcrumbs={[{ label: t("nav.home"), to: "/" }, { label: t("nav.resources") }]}
        label={t("nav.resources")}
        title={t("resources.title")}
        subtitle={t("resources.subtitle")}
      />

      {/* Resource Library placeholder */}
      <section id="resource-library" className="section-padding bg-card border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-3">
            <div className="w-12 h-px bg-gold mb-4" />
            <h2 className="text-2xl font-serif font-bold text-foreground">{t("resources.library.title")}</h2>
          </div>
          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mb-8">{t("resources.library.subtitle")}</p>

          <div className="text-center py-16 px-6 border border-border rounded-sm bg-background">
            <File className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="text-lg font-serif font-bold text-foreground mb-2">
              {t("resources.empty")}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto text-sm">
              Resources will be available once the backend is connected.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
