import * as React from "react";
import { cn } from "@/lib/utils";

export function Field({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("flex flex-col gap-1.5", className)}
            {...props}
        >
            {children}
        </div>
    );
}
