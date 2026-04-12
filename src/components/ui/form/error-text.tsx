import * as React from "react";
import { cn } from "@/lib/utils";

export function ErrorText({
    className,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn("text-xs text-destructive mt-1", className)}
            {...props}
        />
    );
}
