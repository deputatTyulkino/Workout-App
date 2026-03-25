import { FormProvider, type SubmitHandler } from "react-hook-form";
import { Button } from "../../../components/ui/Button/Button";
import { Heading } from "../../../components/ui/Heading/Heading";
import { Input } from "../../../components/ui/Input/Input";
import { Link } from "react-router";
import { useRegisterForm } from "../../../hooks/forms/useRegisterForm";
import bg from "../../../assets/images/register.jpg";
import type { TRegister } from "../../../schemas/register.shema";
import { useRegister } from "../../../hooks/mutations/useRegister";

export const Register = () => {
  const methods = useRegisterForm();
  const registerMutate = useRegister();
  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<TRegister> = async (data) => {
    registerMutate.mutate(data);
  };

  return (
    <article className="flex flex-col items-center gap-10">
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="bg-no-repeat bg-center-top bg-cover py-2.5! px-6.25! rounded-b-[15px] shadow-accent max-block-[30%] block-[30%] inline-full flex flex-col justify-end items-start relative"
      >
        <Heading>Sign up</Heading>
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
            <div className="flex flex-col gap-1.75 inline-full">
              <Input
                name="passwordConfirm"
                type="password"
                placeholder="Confirm Password"
              />
              {errors?.passwordConfirm && (
                <span className="text-[14px] font-normal text-error self-end">
                  {errors?.passwordConfirm?.message}
                </span>
              )}
            </div>
            <Button type="submit" disabled={!isValid} variant="normal">
              {isSubmitting ? "Send..." : "Sign up"}
            </Button>
          </form>
        </FormProvider>
        <Link
          className="focus-visible:text-white hover:text-white decoration-0 text-gray text-[16px] font-normal transition-colors duration-300 ease-out"
          to="/auth/login"
        >
          There's account?
        </Link>
      </div>
    </article>
  );
};
