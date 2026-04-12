import * as React from "react";
import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DocumentCardProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    title: string;
    meta?: string;
}

export function DocumentCard({
    title,
    meta,
    className,
    ...props
}: DocumentCardProps) {
    return (
        <a
            className={cn(
                "flex items-start gap-4 rounded-md border p-4 transition-colors hover:bg-muted",
                className
            )}
            {...props}
        >
            <FileText className="text-muted-foreground h-6 w-6" />
            <div className="flex flex-col">
                <span className="text-foreground font-medium">{title}</span>
                {meta && (
                    <span className="text-muted-foreground mt-1 text-sm">{meta}</span>
                )}
            </div>
        </a>
    );
}
