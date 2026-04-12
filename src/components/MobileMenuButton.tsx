"use client";

import React from "react";

export default function MobileMenuButton({
    onClickAction,
}: {
    onClickAction: () => void;
}) {
    return (
        <button
            onClick={onClickAction}
            className="text-sm opacity-70 transition-opacity hover:opacity-100 md:hidden"
            aria-label="Open menu"
        >
            Menu
        </button>
    );
}
