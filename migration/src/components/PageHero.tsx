import { memo } from "react";
import { AppLink } from "@/components/AppLink";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { useLangPath } from "@/hooks/useLangPath";

interface BreadcrumbEntry {
  label: string;
  to?: string;
}

interface PageHeroProps {
  breadcrumbs?: BreadcrumbEntry[];
  label?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default memo(function PageHero({ breadcrumbs, label, title, subtitle, children }: PageHeroProps) {
  const langTo = useLangPath();

  return (
    <section aria-label="Page header" className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto max-w-3xl text-center">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumb className="mb-6 justify-center">
            <BreadcrumbList>
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="contents">
                  {i > 0 && <BreadcrumbSeparator className="text-primary-foreground/30" />}
                  <BreadcrumbItem>
                    {crumb.to ? (
                      <BreadcrumbLink asChild>
                        <AppLink to={langTo(crumb.to)} className="text-primary-foreground/50">
                          {crumb.label}
                        </AppLink>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage className="text-primary-foreground/80">
                        {crumb.label}
                      </BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                </span>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        )}
        {label && (
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            {label}
          </span>
        )}
        {title && (
          <h1 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 break-words">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="text-primary-foreground/70 text-lg leading-relaxed break-words">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
});
