"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export const Radio = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
>(({ className, children, ...props }, ref) => (
    <label className="inline-flex cursor-pointer items-center gap-2">
        <input
            type="radio"
            ref={ref}
            className={cn(
                "h-4 w-4 rounded-full border-input text-primary focus-visible:ring-2 focus-visible:ring-ring",
                className
            )}
            {...props}
        />
        {children && (
            <span className="text-foreground pointer-events-none text-sm">
                {children}
            </span>
        )}
    </label>
));

Radio.displayName = "Radio";
