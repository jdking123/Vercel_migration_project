import React from "react";

export default function Page({
    title,
    intro,
    children,
}: {
    title: string;
    intro?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="section">
            <div className="container-jdpsf flex flex-col gap-12 py-16">

                {/* Title */}
                <h1 className="h1">{title}</h1>

                {/* Intro paragraph */}
                {intro && <p className="lead max-w-2xl">{intro}</p>}

                {/* Main content */}
                <div className="body flex max-w-3xl flex-col gap-8">
                    {children}
                </div>
            </div>
        </div>
    );
}
