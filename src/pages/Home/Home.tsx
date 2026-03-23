import { useNavigate } from "react-router";
import { Button } from "../../components/ui/Button/Button";
import { Heading } from "../../components/ui/Heading/Heading";
import { ROUTES } from "../../constants/routes.const";
import { Table } from "../../components/ui/Table/Table";
import homeBg from "../../assets/images/home-bg.png";
import { useAuth } from "../../store/Auth/useAuth";

export const Home = () => {
  const inf = {
    minutes: 20,
    level: "Hard",
    up: 5,
  };

  const { isAuth } = useAuth();
  const navigate = useNavigate();

  return (
    <article
      style={{
        backgroundImage: `url(${homeBg})`,
      }}
      className="flex flex-col gap-10 items-center justify-end bg-no-repeat bg-center-top bg-cover py-8.75! px-6.25!"
    >
      {isAuth ? (
        <>
          <Button variant="main" onClick={() => navigate(ROUTES.new_workout)}>
            New
          </Button>
          <Heading>Move more, live better, feel stronger</Heading>
          <Table inf={inf} />
        </>
      ) : (
        <>
          <Heading>Welcome!</Heading>
          <p className="text-[22px]">Log in to access your personal account</p>
          <Button variant="main" onClick={() => navigate(ROUTES.login)}>
            Login
          </Button>
        </>
      )}
    </article>
  );
};
