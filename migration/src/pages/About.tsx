import { useMemo } from "react";
import { useLanguage } from "@/lib/language";
import { useLangPath } from "@/hooks/useLangPath";
import { AppLink } from "@/components/AppLink";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { ShieldCheck, Aperture, Navigation, HandHeart, User, Users, Building2, ExternalLink, BookOpen, Landmark, Target, Eye, Flag, Heart } from "lucide-react";
import CTASection from "@/components/CTASection";
import { CANONICAL_DOMAIN } from "@/lib/constants";

const values = [
  { icon: ShieldCheck, key: "story.value.integrity" },
  { icon: Aperture, key: "story.value.clarity" },
  { icon: Navigation, key: "story.value.stewardship" },
  { icon: HandHeart, key: "story.value.responsibility" },
];

const directorKeys = [
  "about.director.programs",
  "about.director.community",
  "about.director.strategy",
  "about.director.governance",
  "about.director.finance",
] as const;

export default function About() {
  const { t, lang } = useLanguage();
  const langTo = useLangPath();

  const directors = useMemo(() => directorKeys.map(k => ({ role: t(k) })), [t]);

  return (
    <>
      <SEOHead
        title={t("seo.about.title")}
        description={t("seo.about.desc")}
        canonical={`${CANONICAL_DOMAIN}/${lang}/about`}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About – JD Product Stewardship Foundation",
            description: t("seo.about.desc"),
            url: `${CANONICAL_DOMAIN}/${lang}/about`,
            inLanguage: lang,
            mainEntity: {
              "@type": "Organization",
              name: "JD Product Stewardship Foundation",
              url: CANONICAL_DOMAIN,
              founder: { "@type": "Person", name: "Jeffrey Dossous", jobTitle: "Founder & Executive Director" },
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Jeffrey Dossous",
            jobTitle: "Founder & Executive Director",
            url: "https://www.linkedin.com/in/jeffrey-dossous",
            worksFor: { "@type": "Organization", name: "JD Product Stewardship Foundation", url: CANONICAL_DOMAIN },
            knowsAbout: ["Product Stewardship", "Environmental Compliance", "Regulatory Affairs"],
            sameAs: ["https://www.linkedin.com/in/jeffrey-dossous"],
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: t("nav.home"), item: `${CANONICAL_DOMAIN}/${lang}` },
              { "@type": "ListItem", position: 2, name: t("nav.about"), item: `${CANONICAL_DOMAIN}/${lang}/about` },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            name: t("about.definition.name"),
            description: t("about.definition.desc"),
            inDefinedTermSet: CANONICAL_DOMAIN,
          },
        ]}
      />

      <PageHero
        breadcrumbs={[{ label: t("nav.home"), to: "/" }, { label: t("nav.about") }]}
        label={t("nav.about")}
        title={t("about.title")}
        subtitle={t("about.subtitle")}
      />

      {/* The Story */}
      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading icon={BookOpen} title={t("story.thestory")} />
          <div className="text-muted-foreground leading-relaxed text-justify space-y-4">
            {t("story.text").split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading icon={Landmark} title={t("story.purpose")} />
          <p className="text-muted-foreground leading-relaxed break-words text-justify">{t("story.purpose.text")}</p>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading icon={Eye} title={t("story.vision")} />
          <p className="text-muted-foreground leading-relaxed break-words text-justify">{t("story.vision.text")}</p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading icon={Target} title={t("story.mission")} />
          <p className="text-muted-foreground leading-relaxed break-words text-justify">{t("story.mission.text")}</p>
          <AppLink to={langTo("/services")} className="text-gold hover:underline font-medium inline-flex items-center gap-1 mt-2">
            {t("nav.services")} →
          </AppLink>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading icon={Heart} title={t("story.values")} />
          <p className="text-muted-foreground mb-8">{t("story.values.lead")}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {values.map((v) => (
              <div key={v.key} className="text-center p-6 py-8 md:p-8 border border-border rounded-sm hover:shadow-md transition-shadow min-h-[140px] flex flex-col items-center justify-center">
                <v.icon className="w-12 h-12 md:w-14 md:h-14 text-gold mx-auto mb-4" />
                <h3 className="font-serif font-bold text-foreground text-sm sm:text-base md:text-lg break-words" lang={lang} style={{ hyphens: 'auto' }}>{t(v.key)}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading icon={Flag} title={t("story.goals")} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className={`border border-border rounded-sm p-6 hover:shadow-md transition-shadow${n === 5 ? " md:col-span-2" : ""}`}>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gold/10 text-gold font-bold text-sm flex items-center justify-center">{n}</span>
                  <div>
                    <h3 className="font-serif font-bold text-foreground mb-2">{t(`story.goal.${n}.title`)}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed text-justify">{t(`story.goal.${n}.text`)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading icon={User} title={t("team.founder.label")} />
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden flex-shrink-0 bg-muted flex items-center justify-center">
              <User className="w-16 h-16 text-muted-foreground/30" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-1">
                <a href="https://www.linkedin.com/in/jeffrey-dossous" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1.5">
                  {t("team.founder.name")}<ExternalLink className="w-4 h-4 text-gold" />
                </a>
              </h3>
              <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-4">{t("team.founder.role")}</p>
              <p className="text-muted-foreground leading-relaxed break-words text-justify">{t("team.founder.bio")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading icon={Users} title={t("team.advisory.title")} />
          <p className="text-muted-foreground leading-relaxed break-words text-justify mb-8">{t("team.advisory.intro")}</p>
          <div className="flex flex-wrap justify-center gap-8">
            {directors.map((director) => (
              <div key={director.role} className="w-full max-w-[260px] border border-border border-t-2 border-t-[hsl(var(--gold))] rounded-sm p-8 bg-card hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-[hsl(var(--gold))]/40 flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-[hsl(var(--gold))]/40" />
                </div>
                <h3 className="text-lg font-serif font-bold text-gold text-center mb-1 break-words">{director.role}</h3>
                <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider text-center">{t("about.director.recruiting")}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-center mt-6 text-sm">
            {t("about.board.join")}{" "}
            <AppLink to={langTo("/contact")} className="text-gold hover:underline font-medium">{t("nav.contact")} →</AppLink>
          </p>
        </div>
      </section>

      {/* Affiliations */}
      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading icon={Building2} title={t("team.affiliations.title")} />
          <p className="text-muted-foreground text-center leading-relaxed">{t("about.affiliations.text")}</p>
        </div>
      </section>

      <CTASection variant="resources" />
    </>
  );
}
