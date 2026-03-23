import type { AxiosPromise } from "axios";
import type { TLogin } from "../../schemas/login.schema";
import type { TProfile } from "../../schemas/profile.schema";

type TApiLoginResponse = {
  user: TProfile;
  access: string;
  refresh: string;
};

export type TApiLogin = (data: TLogin) => AxiosPromise<TApiLoginResponse>;

export type TAuthMe = () => AxiosPromise<TProfile>;
