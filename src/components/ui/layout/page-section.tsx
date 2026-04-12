import * as React from "react";
import { cn } from "@/lib/utils";

export function PageSection({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <section
            className={cn("py-8 border-b last:border-none", className)}
            {...props}
        />
    );
}
