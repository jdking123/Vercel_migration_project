import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import { CANONICAL_DOMAIN } from "@/lib/constants";
import { useLanguage } from "@/lib/language";

export default function Accessibility() {
  const { t, lang } = useLanguage();

  return (
    <>
      <SEOHead
        title={`${t("a11y.title")} – JD Product Stewardship Foundation`}
        description={t("a11y.desc")}
        canonical={`${CANONICAL_DOMAIN}/${lang}/accessibility`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: t("nav.home"), item: `${CANONICAL_DOMAIN}/${lang}` },
            { "@type": "ListItem", position: 2, name: t("a11y.short"), item: `${CANONICAL_DOMAIN}/${lang}/accessibility` },
          ],
        }}
      />

      <PageHero
        breadcrumbs={[{ label: t("nav.home"), to: "/" }, { label: t("a11y.short") }]}
        title={t("a11y.title")}
      />

      <div className="container mx-auto px-6 py-16 md:py-24 max-w-3xl">
        <p className="text-sm text-muted-foreground mb-8"><time dateTime="2026-03-01">{t("a11y.updated")}</time></p>
        <div className="prose prose-stone max-w-none space-y-6 text-foreground/90 leading-relaxed">
          <h2 className="text-xl font-serif font-bold text-foreground">{t("a11y.commitment.title")}</h2>
          <p className="text-justify">{t("a11y.commitment.text")}</p>

          <h2 className="text-xl font-serif font-bold text-foreground">{t("a11y.conformance.title")}</h2>
          <p className="text-justify">{t("a11y.conformance.text")}</p>

          <h2 className="text-xl font-serif font-bold text-foreground">{t("a11y.measures.title")}</h2>
          <ul className="list-disc pl-6 space-y-1">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
              <li key={n}>{t(`a11y.measure.${n}`)}</li>
            ))}
          </ul>

          <h2 className="text-xl font-serif font-bold text-foreground">{t("a11y.feedback.title")}</h2>
          <p className="text-justify">{t("a11y.feedback.text")}</p>
        </div>
      </div>
    </>
  );
}
