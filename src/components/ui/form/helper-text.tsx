import * as React from "react";
import { cn } from "@/lib/utils";

export function HelperText({
    className,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn("text-xs text-muted-foreground mt-1", className)}
            {...props}
        />
    );
}
