import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface AuthState {
  user: null;
  session: null;
  loading: boolean;
  isAdmin: boolean;
  adminLoading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthState | undefined>(undefined);

/**
 * Stub AuthProvider — will be replaced with Supabase-backed version later.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [loading] = useState(false);

  const signOut = useCallback(async () => {
    // No-op until Supabase is connected
  }, []);

  return (
    <AuthContext.Provider value={{ user: null, session: null, loading, isAdmin: false, adminLoading: false, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthState {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
