import type { SubmitHandler } from "react-hook-form";
import { Button } from "../../../components/ui/Button/Button";
import { Heading } from "../../../components/ui/Heading/Heading";
import { Input } from "../../../components/ui/Input/Input";
import { useLoginForm } from "../../../hooks/useLoginForm";
import styles from "./Login.module.scss";
import type { TLoginForm } from "../../../hooks/useLoginForm";
import { Link } from "react-router";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useLoginForm();

  const onSubmit: SubmitHandler<TLoginForm> = (data) => console.log(data);

  return (
    <article className={styles.login}>
      <div className={styles.title_block}>
        <Heading>Log in</Heading>
      </div>
      <div className={styles.inputs_block}>
        <form
          method="POST"
          action=""
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input register={register} name="email" type="email" isValid />
          <Input register={register} name="password" type="password" isValid />
          <Button variant="normal" onClick={() => console.log("send")}>
            Log in
          </Button>
        </form>
        <Link to="/auth/register">There's not account?</Link>
      </div>
    </article>
  );
};
