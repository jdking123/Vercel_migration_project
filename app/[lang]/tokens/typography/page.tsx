import Page from "@/components/Page";

export default function TypographyTokensPage() {
    return (
        <Page
            title="Typography Tokens"
            intro="The JD Product Stewardship Foundation uses a structured typographic system built on serif authority, sans-serif clarity, and a modular scale for editorial rhythm and institutional consistency."
        >
            {/* Section: Overview */}
            <section className="flex flex-col gap-4">
                <h2 className="h2">Overview</h2>
                <p>
                    Typography at JDPSF is governed by a modular scale, semantic class
                    structure, and a clear division between serif and sans-serif usage.
                    Serif typography is reserved for institutional headings, while
                    sans-serif is used for body content, navigation, and functional UI.
                </p>
            </section>

            {/* Section: Font Families */}
            <section className="flex flex-col gap-4">
                <h2 className="h2">Font Families</h2>
                <TokenGroup
                    tokens={[
                        ["--font-serif", "var(--font-playfair)"],
                        ["--font-sans", "var(--font-inter)"],
                    ]}
                />
            </section>

            {/* Section: Type Scale */}
            <section className="flex flex-col gap-4">
                <h2 className="h2">Type Scale</h2>
                <p>
                    JDPSF uses a modular scale to maintain consistent rhythm across
                    headings, body text, and supporting elements. These tokens define the
                    base sizes used throughout the system.
                </p>

                <TokenGroup
                    tokens={[
                        ["--step--2", "0.75rem"],
                        ["--step--1", "0.875rem"],
                        ["--step-0", "1rem"],
                        ["--step-1", "1.25rem"],
                        ["--step-2", "1.5rem"],
                        ["--step-3", "1.875rem"],
                        ["--step-4", "2.25rem"],
                        ["--step-5", "3rem"],
                    ]}
                />
            </section>

            {/* Section: Semantic Typography Classes */}
            <section className="flex flex-col gap-4">
                <h2 className="h2">Semantic Typography Classes</h2>
                <p>
                    These classes define the institutional hierarchy used across all JDPSF
                    pages. They ensure consistent editorial structure and multilingual
                    stability.
                </p>

                <TypographyPreview
                    label=".h1"
                    description="Primary page titles and institutional headings."
                    className="h1"
                />

                <TypographyPreview
                    label=".h2"
                    description="Section headings and major content divisions."
                    className="h2"
                />

                <TypographyPreview
                    label=".h3"
                    description="Subsections and tertiary headings."
                    className="h3"
                />

                <TypographyPreview
                    label=".lead"
                    description="Introductory paragraphs and summary text."
                    className="lead"
                />

                <TypographyPreview
                    label=".body"
                    description="Standard body text for all content."
                    className="body"
                />

                <TypographyPreview
                    label=".small"
                    description="Legal text, captions, and secondary metadata."
                    className="small"
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
                </div>
            ))}
        </div>
    );
}

/* TypographyPreview Component */
function TypographyPreview({
    label,
    description,
    className,
}: {
    label: string;
    description: string;
    className: string;
}) {
    return (
        <div className="flex flex-col gap-2 rounded border p-4">
            <div className="flex items-center justify-between">
                <span className="small font-medium">{label}</span>
                <span className="small opacity-70">{description}</span>
            </div>
            <div className={className}>The quick brown fox jumps over the lazy dog.</div>
        </div>
    );
}

