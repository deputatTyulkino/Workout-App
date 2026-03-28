import type { AxiosPromise } from "axios";
import type { TLogin } from "../../schemas/login.schema";
import type { TProfile } from "../../schemas/profile.schema";
import type { TRegister } from "../../schemas/register.schema";

type TApiAuthResponse = {
  user: TProfile;
  access: string;
  refresh: string;
};

export type TApiLogin = (data: TLogin) => AxiosPromise<TApiAuthResponse>;

export type TAuthMe = () => AxiosPromise<TProfile>;

export type TApiRegister = (data: TRegister) => AxiosPromise<TApiAuthResponse>;
