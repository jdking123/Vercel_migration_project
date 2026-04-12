import { memo } from "react";
import { useLanguage } from "@/lib/language";
import { useLangPath } from "@/hooks/useLangPath";
import { AppLink } from "@/components/AppLink";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  variant?: "contact" | "resources";
}

export default memo(function CTASection({ variant = "contact" }: CTASectionProps) {
  const { t } = useLanguage();
  const langTo = useLangPath();

  const isResources = variant === "resources";

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 break-words">
          {t("cta.ready")}
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg break-words">
          {t("cta.desc")}
        </p>
        <Button asChild size="cta">
          <AppLink to={langTo(isResources ? "/resources" : "/contact")}>
            {isResources ? t("cta.explore") : t("cta.contact")}
            <ArrowRight className="w-4 h-4" />
          </AppLink>
        </Button>
      </div>
    </section>
  );
});
