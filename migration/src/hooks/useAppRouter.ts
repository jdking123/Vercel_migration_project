/**
 * Framework-agnostic router wrapper.
 * Today: wraps react-router-dom useNavigate + useLocation.
 * Next.js migration: swap to next/navigation useRouter + usePathname.
 */
import { useNavigate, useLocation } from "react-router-dom";

export function useAppRouter() {
  const navigate = useNavigate();
  const location = useLocation();
  return {
    push: (path: string) => navigate(path),
    replace: (path: string) => navigate(path, { replace: true }),
    pathname: location.pathname,
    search: location.search,
    hash: location.hash,
  };
}
