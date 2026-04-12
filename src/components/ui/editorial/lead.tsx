import * as React from "react";
import { cn } from "@/lib/utils";

export function Lead({
    className,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn(
                "text-lg text-muted-foreground leading-relaxed mb-6",
                className
            )}
            {...props}
        />
    );
}
