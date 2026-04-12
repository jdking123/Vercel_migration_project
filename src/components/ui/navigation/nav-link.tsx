"use client";

import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinkVariants = cva(
    "inline-flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    {
        variants: {
            variant: {
                default: "text-foreground hover:bg-muted",
                subtle: "text-muted-foreground hover:text-foreground hover:bg-muted",
            },
            active: {
                true: "bg-accent text-accent-foreground",
                false: "",
            },
        },
        defaultVariants: {
            variant: "default",
            active: false,
        },
    }
);

export interface NavLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof navLinkVariants> {
    href: string;
    asChild?: boolean;
}

export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
    ({ href, className, variant, asChild = false, ...props }, ref) => {
        const pathname = usePathname();
        const active = pathname === href;

        const Comp = asChild ? Slot : Link;

        return (
            <Comp
                ref={ref}
                href={href}
                className={cn(navLinkVariants({ variant, active }), className)}
                {...props}
            />
        );
    }
);

NavLink.displayName = "NavLink"