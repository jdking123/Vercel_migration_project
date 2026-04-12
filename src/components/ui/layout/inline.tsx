import * as React from "react";
import { cn } from "@/lib/utils";

interface InlineProps extends React.HTMLAttributes<HTMLDivElement> {
    gap?: string; // e.g. "space-x-4"
}

export function Inline({
    className,
    gap = "space-x-4",
    ...props
}: InlineProps) {
    return <div className={cn("flex", gap, className)} {...props} />;
}
