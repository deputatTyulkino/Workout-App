import { createContext } from "react";
import type { TProfile } from "../../schemas/profile.schema";
import type { TLogin } from "../../schemas/login.schema";

export type TAuthContext = {
  isAuth: boolean;
  user: TProfile | null;
  login: (data: TLogin) => void;
  logout: () => void;
  isLoading: boolean;
};

const initialValue = {
  isAuth: false,
  user: null,
  login: () => {},
  logout: () => {},
  isLoading: false,
};

export const AuthContext = createContext<TAuthContext>(initialValue);
