import * as React from "react";
import { cn } from "@/lib/utils";

export function PageSidebarLayout({
    sidebar,
    children,
    className,
}: {
    sidebar: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "grid grid-cols-1 lg:grid-cols-[20rem_1fr] gap-12",
                className
            )}
        >
            <aside>{sidebar}</aside>
            <div>{children}</div>
        </div>
    );
}
