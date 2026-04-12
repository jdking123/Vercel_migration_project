import { Helmet } from "react-helmet-async";
import { CANONICAL_DOMAIN } from "@/lib/constants";
const DEFAULT_OG_IMAGE = `${CANONICAL_DOMAIN}/og-default.png`;
import { useLanguage } from "@/lib/language";
import { LANGUAGES } from "@/lib/i18n";
import { useAppRouter } from "@/hooks/useAppRouter";

interface SEOHeadProps {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  robots?: string;
  extraMeta?: { property?: string; name?: string; content: string }[];
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const LOCALE_MAP: Record<string, string> = {
  en: "en_US",
  fr: "fr_FR",
  es: "es_ES",
  de: "de_DE",
  pt: "pt_BR",
};

export default function SEOHead({ title, description, ogImage, ogType, canonical, robots, extraMeta, jsonLd }: SEOHeadProps) {
  const jsonLdItems = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  const { lang } = useLanguage();
  const router = useAppRouter();

  const pathWithoutLang = router.pathname.replace(/^\/[a-z]{2}(\/|$)/, "/");
  const suffix = pathWithoutLang === "/" ? "" : pathWithoutLang.replace(/\/$/, "");
  const resolvedCanonical = canonical || `${CANONICAL_DOMAIN}/${lang}${suffix}`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots || "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      <link rel="canonical" href={resolvedCanonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={resolvedCanonical} />
      <meta property="og:type" content={ogType || "website"} />
      <meta property="og:locale" content={LOCALE_MAP[lang] || "en_US"} />
      <meta property="og:site_name" content="JD Product Stewardship Foundation" />
      <meta property="og:image" content={ogImage || DEFAULT_OG_IMAGE} />
      {extraMeta?.map((m, i) => (
        <meta key={i} {...(m.property ? { property: m.property } : { name: m.name })} content={m.content} />
      ))}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || DEFAULT_OG_IMAGE} />

      {LANGUAGES.map(l => (
        <link key={l.code} rel="alternate" hrefLang={l.code} href={`${CANONICAL_DOMAIN}/${l.code}${suffix}`} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${CANONICAL_DOMAIN}/en${suffix}`} />

      {LANGUAGES.filter(l => l.code !== lang).map(l => (
        <meta key={l.code} property="og:locale:alternate" content={LOCALE_MAP[l.code] || l.code} />
      ))}

      {jsonLdItems.map((item, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}
