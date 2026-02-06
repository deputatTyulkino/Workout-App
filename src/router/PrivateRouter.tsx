import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useLocation } from "react-router";
import type { ReactNode } from "react";

export const PrivateRouter = ({ children }: { children: ReactNode }) => {
  const { isAuth } = useAuth();
  const { pathname } = useLocation();

  if (!isAuth) {
    window.sessionStorage.setItem("redirectPath", pathname);
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
