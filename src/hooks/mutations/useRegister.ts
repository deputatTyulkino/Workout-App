import { useMutation } from "@tanstack/react-query";
import { ApiServices } from "../../api/endpoints/auth";
import type { TRegister } from "../../schemas/register.schema";
import { useLocation, useNavigate } from "react-router";
import Cookies from "js-cookie";
import { TOKEN_KEY } from "../../constants/token.const";
import { ROUTES } from "../../constants/routes.const";

export const useRegister = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: TRegister) => ApiServices.register(data),
    onSuccess: ({ data }, _, __, context) => {
      console.log("Пользователь зарегистрирован");
      Cookies.set(TOKEN_KEY, data.access);
      context.client.setQueryData(["me"], data.user);
      navigate(state.pathname ?? ROUTES.home, { replace: true });
    },
  });
};
