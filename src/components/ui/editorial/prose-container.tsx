import * as React from "react";
import { cn } from "@/lib/utils";

export function ProseContainer({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "mx-auto w-full max-w-prose px-4 sm:px-6 lg:px-8",
                "prose prose-neutral dark:prose-invert",
                "prose-headings:font-semibold prose-headings:text-foreground",
                "prose-p:text-foreground prose-p:leading-relaxed",
                "prose-li:leading-relaxed",
                "prose-a:text-primary prose-a:underline-offset-4 hover:prose-a:underline",
                className
            )}
            {...props}
        />
    );
}
