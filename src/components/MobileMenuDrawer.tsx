"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function MobileMenuDrawer({
    open,
    onCloseAction,
}: {
    open: boolean;
    onCloseAction: () => void;
}) {
    const drawerRef = useRef<HTMLDivElement>(null);
    const { lang } = useLanguage();

    // Close on Escape
    useEffect(() => {
        function handleKey(e: KeyboardEvent) {
            if (e.key === "Escape") onCloseAction();
        }
        if (open) document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [open, onCloseAction]);

    // Focus trap
    useEffect(() => {
        if (open && drawerRef.current) {
            drawerRef.current.focus();
        }
    }, [open]);

    return (
        <div
            className={`fixed inset-0 z-50 bg-black/40 transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            onClick={onCloseAction}
        >
            <div
                ref={drawerRef}
                tabIndex={-1}
                className={`absolute left-0 top-0 h-full w-64 bg-white dark:bg-neutral-900 shadow-xl p-6 transition-transform ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                <nav className="flex flex-col gap-6 text-lg">
                    <Link href={`/${lang}`} onClick={onCloseAction}>Home</Link>
                    <Link href={`/${lang}/about`} onClick={onCloseAction}>About</Link>
                    <Link href={`/${lang}/services`} onClick={onCloseAction}>Services</Link>
                    <Link href={`/${lang}/resources`} onClick={onCloseAction}>Resources</Link>
                    <Link href={`/${lang}/contact`} onClick={onCloseAction}>Contact</Link>
                </nav>
            </div>
        </div>
    );
}
