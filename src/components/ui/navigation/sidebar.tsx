import * as React from "react";
import { cn } from "@/lib/utils";

export function Sidebar({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <aside
            className={cn(
                "w-64 shrink-0 border-r bg-sidebar text-sidebar-foreground flex flex-col",
                className
            )}
            {...props}
        />
    );
}
