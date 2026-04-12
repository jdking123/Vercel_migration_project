import * as React from "react";
import { cn } from "@/lib/utils";

export function Quote({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLQuoteElement>) {
    return (
        <blockquote
            className={cn(
                "border-l-4 pl-4 italic text-muted-foreground",
                className
            )}
            {...props}
        >
            {children}
        </blockquote>
    );
}
