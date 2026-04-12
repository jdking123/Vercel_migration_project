import * as React from "react";
import { cn } from "@/lib/utils";

export function StatBlock({
    value,
    label,
    className,
    ...props
}: {
    value: string | number;
    label: string;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "rounded-md border p-4 flex flex-col items-start",
                className
            )}
            {...props}
        >
            <div className="text-foreground text-2xl font-semibold">{value}</div>
            <div className="text-muted-foreground mt-1 text-sm">{label}</div>
        </div>
    );
}
