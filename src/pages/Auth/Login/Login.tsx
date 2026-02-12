import { Button } from "../../../components/ui/Button/Button";
import { Heading } from "../../../components/ui/Heading/Heading";
import { Input } from "../../../components/ui/Input/Input";
import styles from "./Login.module.scss";

export const Login = () => {
  return (
    <article className={styles.login}>
      <div className={styles.title_block}>
        <Heading>Log in</Heading>
      </div>
      <div className={styles.inputs_block}>
        <form method="POST" action="" noValidate>
          <Input name="email" type="email" isValid />
          <Input name="password" type="password" isValid />
          <Button onClick={() => console.log("send")}>Log in</Button>
        </form>
      </div>
    </article>
  );
};
