export function getCanonicalPath(pathname: string): string {
    // Remove leading language code: /en/about → /about
    const withoutLang = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "");

    // Normalize empty path to "/"
    const normalized = withoutLang === "" ? "/" : withoutLang;

    // Remove trailing slash except root
    return normalized !== "/" && normalized.endsWith("/")
        ? normalized.slice(0, -1)
        : normalized;
}
