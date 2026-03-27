import { useQuery } from "@tanstack/react-query";
import { ApiServices } from "../../api/endpoints/auth";
import { TOKEN_KEY } from "../../constants/token.const";
import Cookies from "js-cookie";

export const useProfile = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: ApiServices.auth_me,
    select: ({ data }) => data,
    retry: 2,
    retryDelay: 1000,
    enabled: !!Cookies.get(TOKEN_KEY),
  });
};
