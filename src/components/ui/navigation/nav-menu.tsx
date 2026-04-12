import * as React from "react";
import { cn } from "@/lib/utils";

export function NavMenu({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <nav
            className={cn(
                "flex items-center gap-2 px-4 py-2 border-b bg-background",
                className
            )}
            {...props}
        />
    );
}
