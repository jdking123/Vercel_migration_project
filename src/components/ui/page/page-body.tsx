import * as React from "react";
import { cn } from "@/lib/utils";

export function PageBody({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <main
            className={cn("flex-1 w-full max-w-prose mx-auto space-y-12", className)}
            {...props}
        />
    );
}
