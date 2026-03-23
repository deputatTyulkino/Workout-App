import { useForm, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type TRegister } from "../../schemas/register.shema";

export const useRegisterForm = (): UseFormReturn<TRegister> => {
  return useForm<TRegister>({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
  });
};
