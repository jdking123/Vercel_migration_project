"use client";

import { useState } from "react";
import { useAuth } from "@/auth/useAuth";
import { useLanguage } from "@/lib/language";
import { AppLink } from "@/components/AppLink";

export default function SignInPage() {
  const auth = useAuth();
  const { t } = useLanguage();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const result = await auth.signIn(email, password);

    if (!result.ok) {
      setError(result.error || "Unable to sign in.");
      return;
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-serif text-3xl">{t("auth.signIn") || "Sign In"}</h1>

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
          {t("auth.signIn") || "Sign In"}
        </button>
      </form>

      <div className="flex justify-between small opacity-80">
        <AppLink href="/reset">{t("auth.forgot") || "Forgot password?"}</AppLink>
        <AppLink href="/sign-up">{t("auth.noAccount") || "Create account"}</AppLink>
      </div>
    </div>
  );
}
