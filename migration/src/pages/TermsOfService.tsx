import { useLanguage } from "@/lib/language";

export default function TermsOfService() {
  const { t } = useLanguage();
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-serif font-bold text-foreground mb-6">{t("terms.title")}</h1>
        <p className="text-muted-foreground text-sm mb-4">{t("terms.updated")}</p>
        <p className="text-muted-foreground leading-relaxed">{t("terms.desc")}</p>
      </div>
    </section>
  );
}
