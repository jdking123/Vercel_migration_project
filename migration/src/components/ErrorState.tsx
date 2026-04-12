import { AlertTriangle } from "lucide-react";
import { AppLink } from "@/components/AppLink";

interface ErrorStateProps {
  message: string;
  linkTo?: string;
  linkLabel?: string;
}

export default function ErrorState({ message, linkTo, linkLabel }: ErrorStateProps) {
  return (
    <section className="section-padding bg-card">
      <div role="alert" className="container mx-auto max-w-3xl text-center">
        <AlertTriangle className="w-10 h-10 text-destructive mx-auto mb-4" />
        <p className="text-muted-foreground mb-4">{message}</p>
        {linkTo && linkLabel && (
          <AppLink to={linkTo} className="text-gold hover:underline inline-block font-medium">
            {linkLabel}
          </AppLink>
        )}
      </div>
    </section>
  );
}
