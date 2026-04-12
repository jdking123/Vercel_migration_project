"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
    // Stable QueryClient instance
    const [queryClient] = useState(() => new QueryClient());

    return (
        <ThemeProvider>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </ThemeProvider>
    );
}
