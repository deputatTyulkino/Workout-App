import { useAuth } from "../store/Auth/useAuth";
import { Navigate, Outlet } from "react-router";
import { ROUTES } from "../constants/routes.const";

export const GuestRouter = () => {
  const { isAuth } = useAuth();

  if (isAuth) {
    return <Navigate to={{ pathname: ROUTES.home }} replace />;
  }

  return <Outlet />;
};
