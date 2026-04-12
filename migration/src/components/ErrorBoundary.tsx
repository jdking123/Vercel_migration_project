import React from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

const TEXTS: Record<string, { title: string; desc: string; retry: string }> = {
  en: { title: "Something went wrong", desc: "An unexpected error occurred. Please try again.", retry: "Try again" },
  fr: { title: "Une erreur est survenue", desc: "Une erreur inattendue s'est produite. Veuillez réessayer.", retry: "Réessayer" },
  es: { title: "Algo salió mal", desc: "Ocurrió un error inesperado. Por favor, inténtelo de nuevo.", retry: "Reintentar" },
  de: { title: "Etwas ist schiefgelaufen", desc: "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.", retry: "Erneut versuchen" },
  pt: { title: "Algo deu errado", desc: "Ocorreu um erro inesperado. Por favor, tente novamente.", retry: "Tentar novamente" },
};

function detectLang(): string {
  const match = window.location.pathname.match(/^\/([a-z]{2})(\/|$)/);
  if (match && TEXTS[match[1]]) return match[1];
  return "en";
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info.componentStack);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      const lang = detectLang();
      const t = TEXTS[lang] || TEXTS.en;

      return (
        <div className="min-h-screen flex items-center justify-center bg-background px-6">
          <div className="text-center max-w-md space-y-4">
            <AlertTriangle className="w-12 h-12 text-gold mx-auto" />
            <h1 className="text-xl font-serif font-bold text-foreground">{t.title}</h1>
            <p className="text-muted-foreground text-sm">{t.desc}</p>
            <Button variant="outline" onClick={this.handleRetry}>{t.retry}</Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
