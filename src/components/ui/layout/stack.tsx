import * as React from "react";
import { cn } from "@/lib/utils";

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
    gap?: string; // e.g. "space-y-4"
}

export function Stack({ className, gap = "space-y-4", ...props }: StackProps) {
    return <div className={cn(gap, className)} {...props} />;
}
