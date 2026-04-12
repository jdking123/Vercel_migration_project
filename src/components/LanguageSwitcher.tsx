"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LANGUAGES } from "@/lib/i18n";

export default function LanguageSwitcher() {
    const pathname = usePathname();

    // Split the path into segments: ["", "en", "about", "team"]
    const segments = pathname?.split("/") ?? [];

    // Current language is always the first segment after "/"
    const currentLang = segments[1];

    return (
        <div className="flex items-center gap-4">
            {LANGUAGES.map((l) => {
                // Replace the language segment with the new one
                const newPath = `/${l.code}${segments.slice(2).join("/") ? "/" + segments.slice(2).join("/") : ""}`;

                return (
                    <Link
                        key={l.code}
                        href={newPath}
                        className={`text-sm transition-opacity ${l.code === currentLang
                                ? "font-semibold underline"
                                : "opacity-70 hover:opacity-100"
                            }`}
                    >
                        {l.label}
                    </Link>
                );
            })}
        </div>
    );
}
