import * as React from "react";
import { cn } from "@/lib/utils";

export function PageActions({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "flex items-center justify-end gap-2 mb-6",
                className
            )}
            {...props}
        />
    );
}
