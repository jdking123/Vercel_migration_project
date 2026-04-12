import { useLanguage } from "@/lib/language";

export default function PrivacyPolicy() {
  const { t } = useLanguage();
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-serif font-bold text-foreground mb-6">{t("privacy.title")}</h1>
        <p className="text-muted-foreground text-sm mb-4">{t("privacy.updated")}</p>
        <p className="text-muted-foreground leading-relaxed">{t("privacy.desc")}</p>
      </div>
    </section>
  );
}
