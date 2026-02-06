import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../../components/ui/Button/Button";
import { Heading } from "../../components/ui/Heading/Heading";
import { ROUTES } from "../../constants/routes";

export const Home = () => {
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
    <>
      <Button
        isButton={true}
        isMain={true}
        onClick={() => navigate(ROUTES.new_workout)}
      >
        New
      </Button>
      <Heading>Move more, live better, feel stronger</Heading>
    </>
  );
};
