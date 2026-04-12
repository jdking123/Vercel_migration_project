"use client";

export default function TokenTable({
    title,
    filter,
}: {
    title: string;
    filter: string;
}) {
    const tokens = (() => {
        if (typeof window === "undefined") return [];
        const styles = getComputedStyle(document.documentElement);
        const entries: [string, string][] = [];

        for (let i = 0; i < styles.length; i++) {
            const name = styles[i];
            if (name.startsWith(filter)) {
                const value = styles.getPropertyValue(name).trim();
                entries.push([name, value]);
            }
        }

        return entries;
    })();

    return (
        <section className="flex flex-col gap-4">
            <h2 className="h2">{title}</h2>

            <div className="grid gap-4">
                {tokens.map(([name, value]) => (
                    <TokenRow key={name} name={name} value={value} />
                ))}
            </div>
        </section>
    );
}

function TokenRow({ name, value }: { name: string; value: string }) {
    const isColor =
        value.startsWith("oklch(") ||
        value.startsWith("hsl(") ||
        value.startsWith("#");

    return (
        <div className="flex items-center justify-between rounded border p-4">
            <div className="flex flex-col">
                <span className="small font-medium">{name}</span>
                <span className="small opacity-70">{value}</span>
            </div>

            {isColor ? (
                <div
                    className="h-10 w-10 rounded border"
                    style={{ backgroundColor: value }}
                />
            ) : (
                <div className="small opacity-50">—</div>
            )}
        </div>
    );
}
