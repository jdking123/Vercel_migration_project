"use client";

import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sidebarLinkVariants = cva(
    "flex items-center gap-3 px-4 py-2 text-sm rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    {
        variants: {
            active: {
                true: "bg-accent text-accent-foreground",
                false: "text-sidebar-foreground hover:bg-muted",
            },
        },
        defaultVariants: {
            active: false,
        },
    }
);

export interface SidebarLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof sidebarLinkVariants> {
    href: string;
    asChild?: boolean;
}

export function SidebarLink({
    href,
    className,
    asChild = false,
    ...props
}: SidebarLinkProps) {
    const pathname = usePathname();
    const active = pathname === href;

    const Comp = asChild ? Slot : Link;

    return (
        <Comp
            href={href}
            className={cn(sidebarLinkVariants({ active }), className)}
            {...props}
        />
    );
}
