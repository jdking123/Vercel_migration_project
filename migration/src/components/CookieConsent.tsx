import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/language";
import { useLangPath } from "@/hooks/useLangPath";
import { AppLink } from "@/components/AppLink";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

const CONSENT_KEY = "jdpsf_cookie_consent";

export type ConsentValue = "accepted" | "rejected" | null;

export function getConsent(): ConsentValue {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "accepted" || v === "rejected" ? v : null;
  } catch {
    return null;
  }
}

export function resetConsent() {
  try { localStorage.removeItem(CONSENT_KEY); } catch {}
  window.dispatchEvent(new Event("consent-changed"));
}

export default function CookieConsent() {
  const { t } = useLanguage();
  const langTo = useLangPath();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsent() === null) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleOpen = () => {
      resetConsent();
      setVisible(true);
    };
    window.addEventListener("open-cookie-consent", handleOpen);
    return () => window.removeEventListener("open-cookie-consent", handleOpen);
  }, []);

  function handleAccept() {
    try { localStorage.setItem(CONSENT_KEY, "accepted"); } catch {}
    setVisible(false);
    window.dispatchEvent(new Event("consent-changed"));
  }

  function handleReject() {
    try { localStorage.setItem(CONSENT_KEY, "rejected"); } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={t("cookie.label")}
      className="fixed bottom-0 inset-x-0 z-[60] animate-fade-up bg-card/95 backdrop-blur-md border-t border-border shadow-[0_-8px_30px_rgb(0,0,0,0.12)]"
    >
      <div className="container mx-auto px-4 py-3 md:px-6 md:py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-sm text-muted-foreground leading-relaxed flex-1 w-full">
          <Cookie className="w-5 h-5 text-gold flex-shrink-0" />
          <p className="flex-1">
            {t("cookie.message")}{" "}
            <AppLink to={langTo("/privacy")} className="text-gold hover:underline whitespace-nowrap">
              {t("nav.privacy")}
            </AppLink>
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0 w-full sm:w-auto justify-end">
          <Button variant="outline" size="sm" onClick={handleReject} className="text-xs h-10 min-w-[44px]">
            {t("cookie.decline")}
          </Button>
          <Button size="sm" onClick={handleAccept} className="text-xs h-10 min-w-[44px] bg-gold text-accent-foreground hover:bg-gold-light">
            {t("cookie.accept")}
          </Button>
        </div>
      </div>
    </div>
  );
}
