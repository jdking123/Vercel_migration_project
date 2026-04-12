import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import LoadingPage from "@/components/LoadingPage";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading, isAdmin, adminLoading } = useAuth();

  if (loading || adminLoading) {
    return <LoadingPage />;
  }

  if (!user || !isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
