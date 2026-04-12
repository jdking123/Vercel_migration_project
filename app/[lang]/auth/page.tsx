"use client";

import { useState } from "react";
import { useAuth } from "@/auth/AuthProvider";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function AuthPage() {
    const { login } = useAuth();
    const { lang } = useLanguage();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Placeholder user object — satisfies your User type
        login("demo-token", {
            token: "demo-token",
            email,
            name: "Demo User",
            role: "admin",
        });

        // Redirect to admin dashboard
        window.location.href = `/${lang}/admin`;
    }

    return (
        <div className="section-padding">
            <h1>Login</h1>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-2 rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-2 rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="submit"
                    className="bg-navy text-ivory px-4 py-2 rounded"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
