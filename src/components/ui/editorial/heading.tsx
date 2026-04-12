import * as React from "react";
import { cn } from "@/lib/utils";

const sizes = {
    h1: "text-4xl font-semibold tracking-tight",
    h2: "text-3xl font-semibold tracking-tight",
    h3: "text-2xl font-semibold tracking-tight",
    h4: "text-xl font-semibold",
    h5: "text-lg font-medium",
    h6: "text-base font-medium",
};

export function Heading({
    as: Tag = "h2",
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement> & { as?: keyof typeof sizes }) {
    return (
        <Tag className={cn(sizes[Tag], "text-foreground mb-4", className)} {...props} />
    );
}
