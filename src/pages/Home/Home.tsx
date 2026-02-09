import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../../components/ui/Button/Button";
import { Heading } from "../../components/ui/Heading/Heading";
import { ROUTES } from "../../constants/routes";
import styles from "./Home.module.scss";
import { Table } from "../../components/ui/Table/Table";

export const Home = () => {
  const inf = {
    minutes: 20,
    level: "Hard",
    up: 5,
  };

  const { isAuth } = useAuth();
  const navigate = useNavigate();

  if (!isAuth) {
    return (
      <Button isMain={true} onClick={() => navigate(ROUTES.login)}>
        Login
      </Button>
    );
  }

  return (
    <article className={styles.home}>
      <Button
        isButton={true}
        isMain={true}
        onClick={() => navigate(ROUTES.new_workout)}
      >
        New
      </Button>
      <Heading>Move more, live better, feel stronger</Heading>
      <Table inf={inf} />
    </article>
  );
};
