import * as React from "react";
import { cn } from "@/lib/utils";

export function PageBreadcrumbs({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <nav
            className={cn("text-sm text-muted-foreground mb-4", className)}
            {...props}
        >
            {children}
        </nav>
    );
}
