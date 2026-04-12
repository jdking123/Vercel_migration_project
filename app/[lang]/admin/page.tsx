"use client";

import { useAuth } from "@/auth/AuthProvider";

export default function AdminDashboard() {
    const { user } = useAuth();
    return <div>Admin Dashboard — Welcome {user?.token}</div>;
}
