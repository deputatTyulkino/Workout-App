import { FormProvider, type SubmitHandler } from "react-hook-form";
import { Button } from "../../../components/ui/Button/Button";
import { Heading } from "../../../components/ui/Heading/Heading";
import { Input } from "../../../components/ui/Input/Input";
import { useLoginForm } from "../../../hooks/useLoginForm";
import styles from "./Login.module.scss";
import type { TLoginForm } from "../../../hooks/useLoginForm";
import { Link } from "react-router";

export const Login = () => {
  const methods = useLoginForm();
  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<TLoginForm> = async (data) => {
    setTimeout(async () => {
      console.log(data);
      return await Promise.resolve();
    }, 1500);
  };

  return (
    <article className={styles.login}>
      <div className={styles.title_block}>
        <Heading>Log in</Heading>
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
            <Button
              type="submit"
              disabled={!isValid}
              variant="normal"
              onClick={() => console.log("send")}
            >
              {isSubmitting ? "Send..." : "Log in"}
            </Button>
          </form>
        </FormProvider>
        <Link to="/auth/register">There's not account?</Link>
      </div>
    </article>
  );
};
