import { useForm, type UseFormReturn } from "react-hook-form";
import { UserSchema } from "../schemas/user.schema";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginSchema = UserSchema.pick({ email: true, password: true });

export type TLoginForm = z.infer<typeof LoginSchema>;

export const useLoginForm = (): UseFormReturn<TLoginForm> => {
  return useForm<TLoginForm>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });
};
