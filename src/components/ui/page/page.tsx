import * as React from "react";
import { cn } from "@/lib/utils";

export function Page({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "flex flex-col min-h-[calc(100vh-var(--nav-height))] px-4 sm:px-6 lg:px-8",
                className
            )}
            {...props}
        />
    );
}
