import { useLanguage } from "@/lib/language";

export default function Auth() {
  const { t } = useLanguage();
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-md text-center">
        <h1 className="text-2xl font-serif font-bold text-foreground mb-4">{t("auth.login")}</h1>
        <p className="text-muted-foreground text-sm">Authentication will be connected in a later phase.</p>
      </div>
    </section>
  );
}
