import * as React from "react";
import { cn } from "@/lib/utils";

export function SidebarSection({
    title,
    children,
    className,
}: {
    title: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn("px-4 py-3 flex flex-col gap-1", className)}>
            <div className="text-muted-foreground mb-1 text-xs font-semibold tracking-wide uppercase">
                {title}
            </div>
            {children}
        </div>
    );
}
