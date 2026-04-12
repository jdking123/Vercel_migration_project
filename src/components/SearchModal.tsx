"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/lib/language";
import { AppLink } from "@/components/AppLink";
import { NAV_LINKS } from "@/lib/nav-links";
import { X, Search } from "lucide-react";

export default function SearchModal() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Keyboard shortcut: Ctrl+K or Cmd+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const results = NAV_LINKS.filter((link) =>
    link.key.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 small opacity-70 hover:opacity-100 transition-opacity"
      >
        <Search className="w-4 h-4" />
        <span>{t("search.open") || "Search"}</span>
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-32">
          <div className="bg-background border border-border rounded-lg shadow-xl w-full max-w-lg p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif text-xl">
                {t("search.title") || "Search"}
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Input */}
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("search.placeholder") || "Search pages..."}
              className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-gold"
            />

            {/* Results */}
            <div className="mt-6 flex flex-col gap-2">
              {results.length === 0 && (
                <p className="small opacity-70">
                  {t("search.noResults") || "No results found."}
                </p>
              )}

              {results.map((link) => (
                <AppLink
                  key={link.key}
                  href={link.path}
                  className="block px-3 py-2 rounded-md hover:bg-muted transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {t(link.key)}
                </AppLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}