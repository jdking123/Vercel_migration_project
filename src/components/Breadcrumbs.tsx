"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCanonicalPath } from "@/lib/routing/getCanonicalPath";

interface Crumb {
    href: string;
    label: string;
}

export default function Breadcrumbs({ lang }: { lang: string }) {
    const pathname = usePathname();
    const canonical = getCanonicalPath(pathname);

    const segments: string[] = canonical.split("/").filter(Boolean);

    const crumbs: Crumb[] = segments.map((segment: string, index: number) => {
        const href = `/${lang}/` + segments.slice(0, index + 1).join("/");

        const label = segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c: string) => c.toUpperCase());

        return { href, label };
    });

    return (
        <nav aria-label="Breadcrumb" className="breadcrumbs">
            <ol>
                <li>
                    <Link href={`/${lang}`}>Home</Link>
                </li>

                {crumbs.map((crumb: Crumb) => (
                    <li key={crumb.href}>
                        <Link href={crumb.href}>{crumb.label}</Link>
                    </li>
                ))}
            </ol>
        </nav>
    );
}
