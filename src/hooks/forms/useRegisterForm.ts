import { useForm, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type TRegister } from "../../schemas/register.schema";

export const useRegisterForm = (): UseFormReturn<TRegister> => {
  return useForm<TRegister>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    resolver: zodResolver(registerSchema),
  });
};
