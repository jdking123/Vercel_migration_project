/**
 * Centralized environment accessor.
 * Today: wraps import.meta.env (Vite).
 * Next.js migration: swap to process.env.
 */
export const env = {
  SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL as string | undefined,
  SUPABASE_KEY: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined,
  DEV: import.meta.env.DEV as boolean,
};
