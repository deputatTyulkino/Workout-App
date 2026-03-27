import * as z from "zod";
import { loginSchema } from "./login.schema";

export const registerSchema = loginSchema
  .extend({
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Пароли не совпадают",
    path: ["passwordConfirm"],
  });

export type TRegister = z.infer<typeof registerSchema>;
