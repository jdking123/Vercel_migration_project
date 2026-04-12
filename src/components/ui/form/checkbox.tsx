"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const Checkbox = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
>(({ className, children, ...props }, ref) => (
    <label className="inline-flex cursor-pointer items-center gap-2">
        <span className="relative flex h-4 w-4 items-center justify-center">
            <input
                type="checkbox"
                ref={ref}
                className={cn(
                    "peer absolute h-4 w-4 rounded border-input text-primary focus-visible:ring-2 focus-visible:ring-ring",
                    className
                )}
                {...props}
            />
            <Check className="text-primary pointer-events-none hidden h-3 w-3 peer-checked:block" />
        </span>
        {children && (
            <span className="text-foreground pointer-events-none text-sm">
                {children}
            </span>
        )}
    </label>
));

Checkbox.displayName = "Checkbox";
