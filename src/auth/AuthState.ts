// src/auth/AuthState.ts
import type { User, Session } from "@supabase/supabase-js";

export interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;

  isAdmin: boolean;
  adminLoading: boolean;

  signIn: (
    email: string,
    password: string
  ) => Promise<{ ok: boolean; error?: string }>;

  signUp: (
    email: string,
    password: string
  ) => Promise<{ ok: boolean; error?: string }>;

  resetPassword: (
    email: string
  ) => Promise<{ ok: boolean; error?: string }>;

  signOut: () => Promise<void>;
}