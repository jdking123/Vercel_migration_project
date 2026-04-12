import * as React from "react";
import { cn } from "@/lib/utils";

export function PageHeader({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <header
            className={cn("mb-8 border-b pb-4", className)}
            {...props}
        />
    );
}
