import Page from "@/components/Page";

export default function TokensPage() {
    return (
        <Page
            title="Design Tokens"
            intro="The JD Product Stewardship Foundation uses a structured, OKLCH‑based color system to ensure institutional clarity, accessibility, and long‑term governance stability."
        >
            {/* Section: Overview */}
            <section className="flex flex-col gap-4">
                <h2 className="h2">Overview</h2>
                <p>
                    This page documents the full set of design tokens used across the JDPSF
                    platform. All colors are expressed in the OKLCH color space for
                    perceptual uniformity, WCAG‑aligned contrast, and long‑term
                    maintainability. Tokens are grouped by functional category.
                </p>
            </section>

            {/* Section: Core Tokens */}
            <section className="flex flex-col gap-4">
                <h2 className="h2">Core Tokens</h2>
                <TokenGroup
                    tokens={[
                        ["--background", "oklch(0.9360 0.0203 92.8)"],
                        ["--foreground", "oklch(0.2584 0.0663 264.4)"],
                        ["--card", "oklch(0.9646 0.0134 92.8)"],
                        ["--card-foreground", "oklch(0.2584 0.0663 264.4)"],
                        ["--popover", "oklch(0.9646 0.0134 92.8)"],
                        ["--popover-foreground", "oklch(0.2584 0.0663 264.4)"],
                    ]}
                />
            </section>

            {/* Section: Semantic Tokens */}
            <section className="flex flex-col gap-4">
                <h2 className="h2">Semantic Tokens</h2>
                <TokenGroup
                    tokens={[
                        ["--primary", "oklch(0.2584 0.0663 264.4)"],
                        ["--primary-foreground", "oklch(0.9360 0.0203 92.8)"],
                        ["--secondary", "oklch(0.9360 0.0203 92.8)"],
                        ["--secondary-foreground", "oklch(0.2584 0.0663 264.4)"],
                        ["--accent", "oklch(0.6378 0.0828 78.5)"],
                        ["--accent-foreground", "oklch(0.9646 0.0134 92.8)"],
                        ["--muted", "oklch(0.8794 0.0096 92.8)"],
                        ["--muted-foreground", "oklch(0.5042 0.0046 264.4)"],
                        ["--destructive", "oklch(0.6270 0.2138 27.4)"],
                        ["--destructive-foreground", "oklch(0.9999 0.0000 0)"],
                    ]}
                />
            </section>

            {/* Section: Functional Tokens */}
            <section className="flex flex-col gap-4">
                <h2 className="h2">Functional Tokens</h2>
                <TokenGroup
                    tokens={[
                        ["--border", "oklch(0.8423 0.0073 92.8)"],
                        ["--input", "oklch(0.8423 0.0073 92.8)"],
                        ["--ring", "oklch(0.2584 0.0663 264.4)"],
                        ["--radius", "0.375rem"],
                    ]}
                />
            </section>

            {/* Section: Brand Palette */}
            <section className="flex flex-col gap-4">
                <h2 className="h2">Brand Palette</h2>
                <TokenGroup
                    tokens={[
                        ["--navy", "oklch(0.2584 0.0663 264.4)"],
                        ["--charcoal", "oklch(0.2034 0.0000 0)"],
                        ["--ivory", "oklch(0.9360 0.0203 92.8)"],
                        ["--stone", "oklch(0.6035 0.0000 0)"],
                        ["--gold", "oklch(0.5134 0.1048 78.5)"],
                        ["--gold-light", "oklch(0.7360 0.0912 83.4)"],
                        ["--violet", "oklch(0.3981 0.1320 301.2)"],
                        ["--purple", "oklch(0.4757 0.1274 301.2)"],
                        ["--clay", "oklch(0.5204 0.1044 48.8)"],
                        ["--olive", "oklch(0.5200 0.0715 128.5)"],
                    ]}
                />
            </section>

            {/* Section: Sidebar Tokens */}
            <section className="flex flex-col gap-4">
                <h2 className="h2">Sidebar Tokens</h2>
                <TokenGroup
                    tokens={[
                        ["--sidebar-background", "oklch(0.2584 0.0663 264.4)"],
                        ["--sidebar-foreground", "oklch(0.9360 0.0203 92.8)"],
                        ["--sidebar-primary", "oklch(0.6378 0.0828 78.5)"],
                        ["--sidebar-primary-foreground", "oklch(0.9646 0.0134 92.8)"],
                        ["--sidebar-accent", "oklch(0.3037 0.0488 264.4)"],
                        ["--sidebar-accent-foreground", "oklch(0.9360 0.0203 92.8)"],
                        ["--sidebar-border", "oklch(0.3220 0.0310 264.4)"],
                        ["--sidebar-ring", "oklch(0.6378 0.0828 78.5)"],
                    ]}
                />
            </section>
        </Page>
    );
}

/* TokenGroup Component */
function TokenGroup({ tokens }: { tokens: [string, string][] }) {
    return (
        <div className="grid gap-4">
            {tokens.map(([name, value]) => (
                <div
                    key={name}
                    className="flex items-center justify-between rounded border p-4"
                >
                    <div className="flex flex-col">
                        <span className="small font-medium">{name}</span>
                        <span className="small opacity-70">{value}</span>
                    </div>
                    <div
                        className="h-10 w-10 rounded border"
                        style={{ backgroundColor: `oklch(${value.replace("oklch(", "").replace(")", "")})` }}
                    />
                </div>
            ))}
        </div>
    );
}
