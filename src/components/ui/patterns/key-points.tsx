import * as React from "react";
import { cn } from "@/lib/utils";

export function KeyPoint({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "flex items-start gap-3 rounded-md bg-muted p-3 border",
                className
            )}
            {...props}
        >
            <div className="bg-primary mt-1 h-2 w-2 rounded-full" />
            <div className="text-foreground text-sm">{children}</div>
        </div>
    );
}
