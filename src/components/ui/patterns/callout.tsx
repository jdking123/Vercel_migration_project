import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const calloutVariants = cva(
    "rounded-md border p-4 flex flex-col gap-2",
    {
        variants: {
            variant: {
                info: "border-accent bg-accent/10 text-accent-foreground",
                warning: "border-amber-500 bg-amber-500/10 text-amber-900",
                success: "border-green-600 bg-green-600/10 text-green-900",
                neutral: "border-border bg-muted text-foreground",
            },
        },
        defaultVariants: {
            variant: "neutral",
        },
    }
);

export interface CalloutProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof calloutVariants> { }

export function Callout({ className, variant, ...props }: CalloutProps) {
    return (
        <div className={cn(calloutVariants({ variant }), className)} {...props} />
    );
}
