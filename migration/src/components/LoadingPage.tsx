import { Skeleton } from "@/components/ui/skeleton";

interface LoadingPageProps {
  rows?: number;
  maxWidth?: string;
}

export default function LoadingPage({ rows = 4, maxWidth = "max-w-3xl" }: LoadingPageProps) {
  return (
    <section aria-label="Loading content" aria-busy="true" className="section-padding bg-card">
      <div className={`container mx-auto ${maxWidth} space-y-6`}>
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-10 w-full" />
        {Array.from({ length: rows }).map((_, i) => (
          <Skeleton key={i} className={`h-4 ${i % 2 === 0 ? "w-full" : "w-2/3"}`} />
        ))}
      </div>
    </section>
  );
}
