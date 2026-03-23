import { FormProvider, type SubmitHandler } from "react-hook-form";
import { Button } from "../../../components/ui/Button/Button";
import { Heading } from "../../../components/ui/Heading/Heading";
import { Input } from "../../../components/ui/Input/Input";
import { useLoginForm } from "../../../hooks/forms/useLoginForm";
import { Link } from "react-router";
import bg from "../../../assets/images/auth.jpg";
import type { TLogin } from "../../../schemas/login.schema";
import { useAuth } from "../../../store/Auth/useAuth";

export const Login = () => {
  const { login } = useAuth();
  const methods = useLoginForm();
  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<TLogin> = async (data) => login(data);

  return (
    <article className="flex flex-col items-center gap-10">
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="bg-no-repeat bg-center-top bg-cover py-2.5! px-6.25! rounded-b-[15px] shadow-accent max-block-[40%] block-[40%] inline-full flex flex-col justify-end items-start relative"
      >
        <Heading>Log in</Heading>
      </div>
      <div className="inline-full py-12.5! px-6.25! text-center">
        <FormProvider {...methods}>
          <form
            method="POST"
            action="/"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center mbe-5! gap-5"
          >
            <div className="flex flex-col gap-1.75 inline-full">
              <Input name="email" type="email" placeholder="E-mail" />
              {errors?.email && (
                <span className="text-[14px] font-normal text-error self-end">
                  {errors?.email?.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1.75 inline-full">
              <Input name="password" type="password" placeholder="Password" />
              {errors?.password && (
                <span className="text-[14px] font-normal text-error self-end">
                  {errors?.password?.message}
                </span>
              )}
            </div>
            <Button type="submit" disabled={!isValid} variant="normal">
              {isSubmitting ? "Send..." : "Log in"}
            </Button>
          </form>
        </FormProvider>
        <Link
          className="focus-visible:text-white hover:text-white decoration-0 text-gray text-[16px] font-normal transition-colors duration-300 ease-out"
          to="/auth/register"
          replace
        >
          There's not account?
        </Link>
      </div>
    </article>
  );
};
