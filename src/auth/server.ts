import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export async function createServerSupabase() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );
}

export async function getServerSession() {
  const supabase = await createServerSupabase();
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

export async function getServerUser() {
  const session = await getServerSession();
  return session?.user ?? null;
}

export async function isServerAdmin() {
  const supabase = await createServerSupabase();
  const { data } = await supabase.rpc("has_role", { _role: "admin" });
  return !!data;
}

export async function hasServerRole(...roles: string[]) {
  const supabase = await createServerSupabase();
  const { data } = await supabase.rpc("has_any_role", { _roles: roles });
  return !!data;
}