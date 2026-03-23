import { Navigate } from "react-router";
import { useLocation } from "react-router";
import type { ReactNode } from "react";
import { useAuth } from "../store/Auth/useAuth";
import { ROUTES } from "../constants/routes.const";

export const PrivateRouter = ({ children }: { children: ReactNode }) => {
  const { isAuth } = useAuth();
  const { pathname } = useLocation();

  if (!isAuth) {
    return (
      <Navigate to={{ pathname: ROUTES.login }} state={{ pathname }} replace />
    );
  }

  return <>{children}</>;
};
