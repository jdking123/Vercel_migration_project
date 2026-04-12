"use client";

import { useState } from "react";
import { useAuth } from "@/auth/useAuth";
import { useLanguage } from "@/lib/language";
import { AppLink } from "@/components/AppLink";

export default function SignUpPage() {
  const { signUp } = useAuth();
  const { t } = useLanguage();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const result = await signUp(email, password);

    if (!result.ok) {
      setError(result.error || "Unable to create account.");
      return;
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-serif text-3xl">{t("auth.signUp") || "Create Account"}</h1>

      {error && <p className="text-red-600 small">{error}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder={t("auth.email") || "Email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />

        <input
          type="password"
          placeholder={t("auth.password") || "Password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />

        <button type="submit" className="button button-primary w-full">
          {t("auth.signUp") || "Create Account"}
        </button>
      </form>

      <div className="small opacity-80">
        <AppLink href="/sign-in">{t("auth.haveAccount") || "Already have an account?"}</AppLink>
      </div>
    </div>
  );
}
