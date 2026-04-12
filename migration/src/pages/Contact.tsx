import { useLanguage } from "@/lib/language";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import { Mail, MapPin, Send, Linkedin, CheckCircle2 } from "lucide-react";
import { CANONICAL_DOMAIN } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useContactForm } from "@/hooks/useContactForm";

export default function Contact() {
  const { t, lang } = useLanguage();
  const { form, updateField, submitting, submitted, handleFieldInteraction, handleSubmit, handleSendAnother } = useContactForm();

  return (
    <>
      <SEOHead
        title={t("seo.contact.title")}
        description={t("seo.contact.desc")}
        canonical={`${CANONICAL_DOMAIN}/${lang}/contact`}
        jsonLd={[
          { "@context": "https://schema.org", "@type": "ContactPage", name: "Contact – JD Product Stewardship Foundation", description: t("seo.contact.desc"), url: `${CANONICAL_DOMAIN}/${lang}/contact`, inLanguage: lang, mainEntity: { "@type": "Organization", name: "JD Product Stewardship Foundation", email: "info@jdproductstewardshipfoundation.org", address: { "@type": "PostalAddress", addressLocality: "Montreal", addressCountry: "CA" } } },
          { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: t("nav.home"), item: `${CANONICAL_DOMAIN}/${lang}` }, { "@type": "ListItem", position: 2, name: t("nav.contact"), item: `${CANONICAL_DOMAIN}/${lang}/contact` }] },
        ]}
      />

      <PageHero
        breadcrumbs={[{ label: t("nav.home"), to: "/" }, { label: t("nav.contact") }]}
        label={t("nav.contact")}
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
      />

      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3"><Mail className="w-5 h-5 text-gold mt-0.5" /><div><h2 className="text-base font-serif font-bold text-foreground">{t("contact.info.email")}</h2><p className="text-muted-foreground text-sm">info@jdproductstewardshipfoundation.org</p></div></div>
                <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-gold mt-0.5" /><div><h2 className="text-base font-serif font-bold text-foreground">{t("contact.info.hq")}</h2><p className="text-muted-foreground text-sm">Montreal, Canada</p></div></div>
                <div className="flex items-start gap-3"><Linkedin className="w-5 h-5 text-gold mt-0.5" /><div><h2 className="text-base font-serif font-bold text-foreground">LinkedIn</h2><a href="https://linkedin.com/company/jdpsf" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-gold transition-colors">JDPSF</a></div></div>
              </div>
            </div>

            {submitted ? (
              <div className="lg:col-span-3 flex flex-col items-center justify-center text-center space-y-4 py-12 border border-border rounded-sm">
                <CheckCircle2 className="w-12 h-12 text-gold" />
                <h3 className="text-xl font-serif font-bold text-foreground">{t("contact.success.title")}</h3>
                <p className="text-muted-foreground text-sm max-w-xs">{t("contact.success.desc")}</p>
                <Button variant="outline" onClick={handleSendAnother} className="mt-2">{t("contact.success.another")}</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} onFocus={handleFieldInteraction} className="lg:col-span-3 space-y-5 relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">{t("contact.name")}</Label>
                    <Input id="name" type="text" required maxLength={100} value={form.name} onChange={(e) => updateField("name", e.target.value)} />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">{t("contact.email")}</Label>
                    <Input id="email" type="email" required maxLength={255} value={form.email} onChange={(e) => updateField("email", e.target.value)} />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="org">{t("contact.org")}</Label>
                  <Input id="org" type="text" maxLength={200} value={form.org} onChange={(e) => updateField("org", e.target.value)} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message">{t("contact.message")}</Label>
                  <Textarea id="message" required rows={5} maxLength={2000} value={form.message} onChange={(e) => updateField("message", e.target.value)} className="resize-none" />
                </div>
                {/* Honeypot */}
                <div className="absolute opacity-0 -z-10 pointer-events-none" aria-hidden="true" {...{ inert: "" } as any}>
                  <label htmlFor="website">Website</label>
                  <input id="website" type="text" name="website" autoComplete="off" tabIndex={-1} value={form.website} onChange={(e) => updateField("website", e.target.value)} />
                </div>
                <Button type="submit" variant="gold" disabled={submitting} className="gap-2 uppercase tracking-wider">
                  <Send className="w-4 h-4" />
                  {submitting ? "..." : t("contact.send")}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
