import { getServerUser, isServerAdmin } from "@/auth/server";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const user = await getServerUser();
  const admin = await isServerAdmin();

  if (!user) redirect("/sign-in");
  if (!admin) redirect("/403");

  return (
    <div>
      <h1 className="text-2xl font-serif">Admin Panel</h1>
      <p>Welcome, {user.email}</p>
    </div>
  );
}
