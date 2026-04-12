import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { supabase } from "@/integrations/supabase/middleware-client";

// Supported locales
const LOCALES = ["en", "fr"];

// Routes requiring authentication
const PROTECTED = ["dashboard", "settings"];

// Routes requiring admin privileges
const ADMIN = ["admin"];

// Routes that logged-in users should not see
const AUTH_PAGES = ["sign-in", "sign-up", "auth"];

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const pathname = url.pathname;

  // Extract locale and first segment
  const segments = pathname.split("/").filter(Boolean);
  const locale = LOCALES.includes(segments[0]) ? segments[0] : null;
  const section = locale ? segments[1] : segments[0];

  // Create Supabase client bound to the request
  const { data: { session } } = await supabase(req).auth.getSession();
  const isLoggedIn = !!session?.user;

  // 1. Redirect logged-in users away from auth pages
  if (isLoggedIn && AUTH_PAGES.includes(section)) {
    url.pathname = `/${locale ?? "en"}/dashboard`;
    return NextResponse.redirect(url);
  }

  // 2. Protect authenticated routes
  if (PROTECTED.includes(section)) {
    if (!isLoggedIn) {
      url.pathname = `/${locale ?? "en"}/sign-in`;
      return NextResponse.redirect(url);
    }
  }

  // 3. Protect admin routes
  if (ADMIN.includes(section)) {
    if (!isLoggedIn) {
      url.pathname = `/${locale ?? "en"}/sign-in`;
      return NextResponse.redirect(url);
    }

    const { data } = await supabase(req).rpc("has_role", { _role: "admin" });

    if (!data) {
      url.pathname = `/${locale ?? "en"}/403`;
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((en|fr))/dashboard/:path*",
    "/((en|fr))/settings/:path*",
    "/((en|fr))/admin/:path*",
    "/((en|fr))/sign-in",
    "/((en|fr))/sign-up",
    "/((en|fr))/auth",
  ],
};