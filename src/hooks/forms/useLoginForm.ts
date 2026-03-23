import { useForm, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginShema, type TLogin } from "../../schemas/login.schema";

export const useLoginForm = (): UseFormReturn<TLogin> => {
  return useForm<TLogin>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginShema),
  });
};
