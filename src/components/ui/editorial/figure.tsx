/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { cn } from "@/lib/utils";

export function Figure({
    src,
    alt,
    caption,
    className,
}: {
    src: string;
    alt: string;
    caption?: string;
    className?: string;
}) {
    return (
        <figure className={cn("space-y-2", className)}>
            <img src={src} alt={alt} className="rounded-md border" />
            {caption && (
                <figcaption className="text-muted-foreground text-sm">{caption}</figcaption>
            )}
        </figure>
    );
}
