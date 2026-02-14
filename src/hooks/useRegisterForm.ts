import * as z from "zod";
import { UserSchema } from "../schemas/user.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterSchema = UserSchema.pick({ email: true, password: true })
  .extend({
    confirm: z.string(),
  })
  .refine((data) => data.confirm === data.password, {
    message: "Пароли не совпадают",
    path: ["confirm"],
  });

export type TRegisterForm = z.infer<typeof RegisterSchema>;

export const useRegisterForm = () => {
  return useForm({
    defaultValues: {
      email: "",
      password: "",
      confirm: "",
    },
    mode: "onBlur",
    resolver: zodResolver(RegisterSchema),
  });
};
