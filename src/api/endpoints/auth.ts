import { AuthUrlPath } from "../../constants/urlPath.const";
import { api } from "../config";
import type { TApiLogin, TApiRegister, TAuthMe } from "../types/auth.type";

export const ApiServices = {
  login: async (data) => {
    return await api.post(AuthUrlPath.login, data);
  },
  auth_me: async () => {
    return await api.get(AuthUrlPath.me);
  },
  register: async (data) => {
    return await api.post(AuthUrlPath.register, data);
  },
} satisfies {
  login: TApiLogin;
  auth_me: TAuthMe;
  register: TApiRegister;
};
