import * as React from "react";
import { cn } from "@/lib/utils";

export function PageFooter({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <footer
            className={cn("mt-16 pt-8 border-t text-sm text-muted-foreground", className)}
            {...props}
        />
    );
}
