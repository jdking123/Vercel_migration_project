import { getServerUser, hasServerRole } from "@/auth/server";
import { redirect } from "next/navigation";

export default async function AdminDashboardPage() {
  // 1. Ensure user is logged in
  const user = await getServerUser();
  if (!user) redirect("/en/sign-in");

  // 2. Ensure user has the required role(s)
  const allowed = await hasServerRole("admin");
  if (!allowed) redirect("/en/403");

  // 3. Render the admin dashboard
  return (
    <div>
      <h1 className="text-3xl font-serif">Admin Dashboard</h1>
      <p>Welcome, {user.email}</p>
    </div>
  );
}