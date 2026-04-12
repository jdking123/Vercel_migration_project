import * as React from "react";
import { cn } from "@/lib/utils";

export interface ResourceListItem {
    title: string;
    description?: string;
    href: string;
}

export function ResourceList({
    items,
    className,
}: {
    items: ResourceListItem[];
    className?: string;
}) {
    return (
        <ul className={cn("space-y-4", className)}>
            {items.map((item, i) => (
                <li key={i}>
                    <a
                        href={item.href}
                        className="block rounded-md border p-4 transition-colors hover:bg-muted"
                    >
                        <div className="text-foreground font-medium">{item.title}</div>
                        {item.description && (
                            <div className="text-muted-foreground mt-1 text-sm">
                                {item.description}
                            </div>
                        )}
                    </a>
                </li>
            ))}
        </ul>
    );
}
