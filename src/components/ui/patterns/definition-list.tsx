import * as React from "react";
import { cn } from "@/lib/utils";

export interface DefinitionItem {
    term: string;
    definition: string;
}

export function DefinitionList({
    items,
    className,
}: {
    items: DefinitionItem[];
    className?: string;
}) {
    return (
        <dl className={cn("space-y-6", className)}>
            {items.map((item, i) => (
                <div key={i}>
                    <dt className="text-foreground font-medium">{item.term}</dt>
                    <dd className="text-muted-foreground mt-1">{item.definition}</dd>
                </div>
            ))}
        </dl>
    );
}
