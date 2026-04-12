export interface NavLinkItem {
    key: string;      // translation key
    path: string;     // base path without language prefix
    admin?: boolean;  // optional: admin-only link
}

export const NAV_LINKS: NavLinkItem[] = [
    {
        key: "nav.home",
        path: "/",
    },
    {
        key: "nav.about",
        path: "/about",
    },
    {
        key: "nav.services",
        path: "/services",
    },
    {
        key: "nav.resources",
        path: "/resources",
    },
    {
        key: "nav.contact",
        path: "/contact",
    },
];
