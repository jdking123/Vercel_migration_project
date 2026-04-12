"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Page from "./Page";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="app-layout">
            <Header />

            <Page>
                {children}
            </Page>

            <Footer className="section container-jdpsf" lang="en" />

        </div>
    );
}
