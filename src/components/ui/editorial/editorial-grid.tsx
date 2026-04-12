import * as React from "react";
import { cn } from "@/lib/utils";

export function EditorialGrid({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "grid grid-cols-1 lg:grid-cols-[1fr_20rem] gap-12",
                className
            )}
            {...props}
        />
    );
}
