import React from "react";

export default function Page({ children }: { children: React.ReactNode }) {
    return (
        <main className="section container-jdpsf">
            {children}
        </main>
    );
}
