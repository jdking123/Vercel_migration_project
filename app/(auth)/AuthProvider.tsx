"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

import { supabase } from "@/integrations/supabase/client";
import type { User, Session } from "@supabase/supabase-js";
import type { AuthState } from "./AuthState";

const AuthContext = createContext<AuthState | undefined>(undefined);

const SYNC_KEY = "auth_sync";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  const checkAdmin = useCallback(async () => {
    setAdminLoading(true);
    try {
      const { data } = await supabase.rpc("has_role", { _role: "admin" });
      setIsAdmin(!!data);
    } finally {
      setAdminLoading(false);
    }
  }, []);

  // Listen for auth changes
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      setUser(newSession?.user ?? null);

      if (newSession?.user) {
        checkAdmin();
      } else {
        setIsAdmin(false);
        setAdminLoading(false);
      }

      setLoading(false);

      // Broadcast to other tabs
      localStorage.setItem(
        SYNC_KEY,
        JSON.stringify({
          event: newSession ? "login" : "logout",
          ts: Date.now(),
        })
      );
    });

    // Initial load
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
      setUser(s?.user ?? null);

      if (s?.user) {
        checkAdmin();
      } else {
        setAdminLoading(false);
      }

      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [checkAdmin]);

  // Multi‑tab sync
  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key !== SYNC_KEY || !e.newValue) return;

      const data = JSON.parse(e.newValue);

      if (data.event === "logout") {
        setUser(null);
        setSession(null);
        setIsAdmin(false);
        setAdminLoading(false);
      } else if (data.event === "login") {
        supabase.auth.getSession().then(({ data: { session: s } }) => {
          setSession(s);
          setUser(s?.user ?? null);
          if (s?.user) checkAdmin();
        });
      }
    };

    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, [checkAdmin]);

  // Supabase sign-in
  const signIn = useCallback(async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  }, []);

  // Supabase sign-up
  const signUp = useCallback(async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  }, []);

  // Supabase reset password
  const resetPassword = useCallback(async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset`,
    });
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    setIsAdmin(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        isAdmin,
        adminLoading,
        signIn,
        signUp,
        resetPassword,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthState {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
