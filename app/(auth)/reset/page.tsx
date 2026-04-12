"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage } from "@/lib/language";
import { AppLink } from "@/components/AppLink";

export default function ResetPage() {
  const { t } = useLanguage();

  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/auth/reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || "Unable to send reset email.");
        return;
      }

      setSent(true);
    } catch (err) {
      setError("Unable to send reset email.");
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-serif text-3xl">{t("auth.reset") || "Reset Password"}</h1>

      {sent ? (
        <p className="small opacity-80">
          {t("auth.resetSent") || "A reset link has been sent to your email."}
        </p>
      ) : (
        <>
          {error && <p className="text-red-600 small">{error}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder={t("auth.email") || "Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />

            <button type="submit" className="button button-primary w-full">
              {t("auth.sendReset") || "Send Reset Link"}
            </button>
          </form>
        </>
      )}

      <div className="small opacity-80">
        <AppLink href="/sign-in">{t("auth.backToSignIn") || "Back to sign in"}</AppLink>
      </div>
    </div>
  );
}
