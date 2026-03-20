import * as z from "zod";
import { loginShema } from "./login.schema";

export const registerSchema = loginShema
  .extend({
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Пароли не совпадают",
    path: ["passwordConfirm"],
  });

export type TRegister = z.infer<typeof registerSchema>;
