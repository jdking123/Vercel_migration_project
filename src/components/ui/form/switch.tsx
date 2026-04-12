"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export const Switch = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
>(({ className, children, ...props }, ref) => (
    <label className="inline-flex cursor-pointer items-center gap-2">
        <input type="checkbox" ref={ref} className="peer sr-only" {...props} />
        <span
            className={cn(
                "relative h-5 w-9 rounded-full bg-input transition peer-checked:bg-primary",
                className
            )}
        >
            <span className="bg-background absolute top-0.5 left-0.5 h-4 w-4 rounded-full transition peer-checked:translate-x-4" />
        </span>
        {children && (
            <span className="text-foreground pointer-events-none text-sm">
                {children}
            </span>
        )}
    </label>
));

Switch.displayName = "Switch";
