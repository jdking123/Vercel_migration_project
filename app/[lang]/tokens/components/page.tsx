import Page from "@/components/Page";

export default function ComponentTokensPage() {
    return (
        <Page
            title="Component Tokens"
            intro="Component tokens define the interaction patterns, visual hierarchy, and institutional consistency of JDPSF’s UI elements. These tokens ensure that buttons, cards, inputs, and alerts behave predictably across themes, languages, and contexts."
        >
            {/* Section: Overview */}
            <section className="flex flex-col gap-4">
                <h2 className="h2">Overview</h2>
                <p>
                    Component tokens provide a stable foundation for interactive elements.
                    They define color usage, radius, spacing, and state behavior across the
                    design system. These tokens ensure that components remain consistent,
                    accessible, and aligned with JDPSF’s institutional tone.
                </p>
            </section>

            {/* Section: Button Tokens */}
            <section className="flex flex-col gap-4">
                <h2 className="h2">Button Tokens</h2>
                <p>
                    Buttons use semantic color tokens to ensure clarity and accessibility.
                    Primary actions use institutional navy, while secondary and subtle
                    actions use neutral tones.
                </p>

                <ComponentGroup
                    title="Primary Button"
                    tokens={[
                        ["Background", "var(--primary)"],
                        ["Foreground", "var(--primary-foreground)"],
                        ["Hover Background", "color-mix(in oklch, var(--primary) 90%, black)"],
                        ["Border", "var(--primary)"],
                        ["Radius", "var(--radius)"],
                    ]}
                />

                <ComponentGroup
                    title="Secondary Button"
                    tokens={[
                        ["Background", "var(--secondary)"],
                        ["Foreground", "var(--secondary-foreground)"],
                        ["Hover Background", "color-mix(in oklch, var(--secondary) 90%, black)"],
                        ["Border", "var(--border)"],
                        ["Radius", "var(--radius)"],
                    ]}
                />

                <ComponentGroup
                    title="Subtle Button"
                    tokens={[
                        ["Background", "transparent"],
                        ["Foreground", "var(--foreground)"],
                        ["Hover Background", "var(--muted)"],
                        ["Border", "transparent"],
                        ["Radius", "var(--radius)"],
                    ]}
                />

                <ComponentGroup
                    title="Destructive Button"
                    tokens={[
                        ["Background", "var(--destructive)"],
                        ["Foreground", "var(--destructive-foreground)"],
                        ["Hover Background", "color-mix(in oklch, var(--destructive) 90%, black)"],
                        ["Border", "var(--destructive)"],
                        ["Radius", "var(--radius)"],
                    ]}
                />
            </section>

            {/* Section: Card Tokens */}
            <section className="flex flex-col gap-4">
                <h2 className="h2">Card Tokens</h2>
                <ComponentGroup
                    title="Card"
                    tokens={[
                        ["Background", "var(--card)"],
                        ["Foreground", "var(--card-foreground)"],
                        ["Border", "var(--border)"],
                        ["Radius", "var(--radius)"],
                        ["Padding", "1.5rem"],
                    ]}
                />
            </section>

            {/* Section: Input Tokens */}
            <section className="flex flex-col gap-4">
                <h2 className="h2">Input Tokens</h2>
                <ComponentGroup
                    title="Input Field"
                    tokens={[
                        ["Background", "var(--background)"],
                        ["Foreground", "var(--foreground)"],
                        ["Border", "var(--input)"],
                        ["Focus Ring", "var(--ring)"],
                        ["Radius", "var(--radius)"],
                        ["Padding", "0.75rem"],
                    ]}
                />
            </section>

            {/* Section: Alert Tokens */}
            <section className="flex flex-col gap-4">
                <h2 className="h2">Alert Tokens</h2>
                <ComponentGroup
                    title="Info Alert"
                    tokens={[
                        ["Background", "var(--muted)"],
                        ["Foreground", "var(--foreground)"],
                        ["Border", "var(--border)"],
                    ]}
                />

                <ComponentGroup
                    title="Success Alert"
                    tokens={[
                        ["Background", "oklch(0.90 0.05 150)"],
                        ["Foreground", "oklch(0.25 0.05 150)"],
                        ["Border", "oklch(0.80 0.04 150)"],
                    ]}
                />

                <ComponentGroup
                    title="Warning Alert"
                    tokens={[
                        ["Background", "var(--accent)"],
                        ["Foreground", "var(--accent-foreground)"],
                        ["Border", "color-mix(in oklch, var(--accent) 80%, black)"],
                    ]}
                />

                <ComponentGroup
                    title="Destructive Alert"
                    tokens={[
                        ["Background", "var(--destructive)"],
                        ["Foreground", "var(--destructive-foreground)"],
                        ["Border", "color-mix(in oklch, var(--destructive) 80%, black)"],
                    ]}
                />
            </section>
        </Page>
    );
}

/* ComponentGroup Component */
function ComponentGroup({
    title,
    tokens,
}: {
    title: string;
    tokens: [string, string][];
}) {
    return (
        <div className="flex flex-col gap-4 rounded border p-4">
            <h3 className="h3">{title}</h3>
            <div className="grid gap-4">
                {tokens.map(([label, value]) => (
                    <div
                        key={label}
                        className="flex items-center justify-between rounded border p-3"
                    >
                        <span className="small font-medium">{label}</span>
                        <span className="small opacity-70">{value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
