import * as React from "react";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/ui/editorial/heading";
import { Lead } from "@/components/ui/editorial/lead";

export function PageHeader({
    title,
    lead,
    meta,
    className,
}: {
    title: string;
    lead?: string;
    meta?: React.ReactNode;
    className?: string;
}) {
    return (
        <header className={cn("mb-10 border-b pb-6", className)}>
            <Heading as="h1" className="mb-2">
                {title}
            </Heading>
            {lead && <Lead>{lead}</Lead>}
            {meta && <div className="text-muted-foreground mt-2 text-sm">{meta}</div>}
        </header>
    );
}
