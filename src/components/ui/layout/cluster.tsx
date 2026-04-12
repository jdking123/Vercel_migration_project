import * as React from "react";
import { cn } from "@/lib/utils";

interface ClusterProps extends React.HTMLAttributes<HTMLDivElement> {
    gap?: string; // e.g. "gap-4"
}

export function Cluster({
    className,
    gap = "gap-4",
    ...props
}: ClusterProps) {
    return (
        <div
            className={cn("flex flex-wrap items-center", gap, className)}
            {...props}
        />
    );
}
