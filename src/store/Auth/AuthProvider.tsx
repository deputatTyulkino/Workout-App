import { type ReactNode } from "react";
import { AuthContext } from "./authContext";
import type { TProfile } from "../../schemas/profile.schema";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import type { TLogin } from "../../schemas/login.schema";
import { ApiServices } from "../../api/endpoints/auth";
import Cookies from "js-cookie";
import { TOKEN_KEY } from "../../constants/token.const";
import { useLocation, useNavigate } from "react-router";
import { ROUTES } from "../../constants/routes.const";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const queryClient = useQueryClient();

  const { data, isLoading, isPending, isError, error } = useQuery({
    queryKey: ["me"],
    queryFn: ApiServices.auth_me,
    retry: 0,
    select: ({ data }) => data,
    enabled: !!Cookies.get(TOKEN_KEY),
  });

  if (data) {
    queryClient.setQueryData(["me"], data);
  }

  const loginMutate = useMutation({
    mutationFn: (data: TLogin) => ApiServices.login(data),
    onSuccess: ({ data }, _, __, context) => {
      Cookies.set(TOKEN_KEY, data.access);
      context.client.setQueryData(["me"], data.user);
      navigate(state.pathname ?? ROUTES.home);
    },
  });

  const login = (data: TLogin) => loginMutate.mutate(data);

  const logout = () => {
    Cookies.remove(TOKEN_KEY);
    queryClient.clear();
    navigate(ROUTES.home, { replace: true });
  };

  if (isError) console.log(error);

  const value = {
    user: queryClient.getQueryData(["me"]) as TProfile,
    login: login,
    logout: logout,
    isAuth: !!queryClient.getQueryData(["me"]),
    isLoading: isLoading || isPending || loginMutate.isPending,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
