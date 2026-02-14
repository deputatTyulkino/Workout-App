import { FormProvider, type SubmitHandler } from "react-hook-form";
import { Button } from "../../../components/ui/Button/Button";
import { Heading } from "../../../components/ui/Heading/Heading";
import { Input } from "../../../components/ui/Input/Input";
import styles from "./Register.module.scss";
import { Link } from "react-router";
import {
  useRegisterForm,
  type TRegisterForm,
} from "../../../hooks/useRegisterForm";

export const Register = () => {
  const methods = useRegisterForm();
  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<TRegisterForm> = async (data) => {
    setTimeout(async () => {
      console.log(data);
      return await Promise.resolve();
    }, 1500);
  };

  return (
    <article className={styles.register}>
      <div className={styles.title_block}>
        <Heading>Sign up</Heading>
      </div>
      <div className={styles.inputs_block}>
        <FormProvider {...methods}>
          <form
            method="POST"
            action="/"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.input_block}>
              <Input name="email" type="email" placeholder="E-mail" />
              {errors?.email && (
                <span className={styles.error}>{errors?.email?.message}</span>
              )}
            </div>
            <div className={styles.input_block}>
              <Input name="password" type="password" placeholder="Password" />
              {errors?.password && (
                <span className={styles.error}>
                  {errors?.password?.message}
                </span>
              )}
            </div>
            <div className={styles.input_block}>
              <Input
                name="confirm"
                type="password"
                placeholder="Confirm Password"
              />
              {errors?.confirm && (
                <span className={styles.error}>{errors?.confirm?.message}</span>
              )}
            </div>
            <Button
              type="submit"
              disabled={!isValid}
              variant="normal"
              onClick={() => console.log("send")}
            >
              {isSubmitting ? "Send..." : "Sign up"}
            </Button>
          </form>
        </FormProvider>
        <Link to="/auth/login">There's account?</Link>
      </div>
    </article>
  );
};
