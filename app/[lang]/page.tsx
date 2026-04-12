"use client";

import { useLanguage } from "@/lib/language";
import { AppLink } from "@/components/AppLink";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-24">

      {/* Hero Section */}
      <section className="section pt-20 pb-32">
        <div className="container-jdpsf text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl leading-tight">
            JD Product Stewardship Foundation
          </h1>

          <p className="mt-6 text-lg opacity-80 leading-relaxed">
            Advancing global stewardship, regulatory clarity, and institutional trust
            through governance‑grade frameworks and lifecycle intelligence.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <AppLink href="/about" className="button button-primary">
              {t("home.learnMore") || "Learn More"}
            </AppLink>

            <AppLink href="/contact" className="button button-secondary">
              {t("home.contactUs") || "Contact Us"}
            </AppLink>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section">
        <div className="container-jdpsf grid gap-12 md:grid-cols-3">

          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-xl">Governance</h3>
            <p className="small opacity-70">
              Institutional frameworks that ensure clarity, accountability, and
              operational resilience across global platforms.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-xl">Stewardship</h3>
            <p className="small opacity-70">
              Lifecycle‑aware stewardship models that elevate trust, transparency,
              and long‑term sustainability.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-xl">Intelligence</h3>
            <p className="small opacity-70">
              Predictive, AI‑assisted insights that strengthen decision‑making and
              institutional alignment.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="section py-24 bg-muted/30 border-y">
        <div className="container-jdpsf text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl leading-tight">
            Building a more resilient and trustworthy global ecosystem
          </h2>

          <p className="mt-6 text-lg opacity-80 leading-relaxed">
            Explore our frameworks, resources, and governance‑grade methodologies
            designed for multi‑surface, federated environments.
          </p>

          <div className="mt-10">
            <AppLink href="/resources" className="button button-primary">
              {t("home.exploreResources") || "Explore Resources"}
            </AppLink>
          </div>
        </div>
      </section>

    </div>
  );
}