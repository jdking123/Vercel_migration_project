import * as React from "react";
import { cn } from "@/lib/utils";

export function TextBlock({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("space-y-4 text-foreground leading-relaxed", className)} {...props} />
    );
}
