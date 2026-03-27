import { useNavigate } from "react-router";
import { Button } from "../../components/ui/Button/Button";
import { Heading } from "../../components/ui/Heading/Heading";
import { ROUTES } from "../../constants/routes.const";
import { Table } from "../../components/ui/Table/Table";
import homeBg from "../../assets/images/home-bg.png";
import { useAuth } from "../../store/Auth/useAuth";
import { useProfile } from "../../hooks/queries/useProfile";
import { capitalize } from "../../utils/Capitalize";
import { getLevel } from "../../utils/getLevel";

export const Home = () => {
  const { data } = useProfile();

  const inf = {
    minutes: data?.workout_minutes ?? 0,
    level: capitalize(getLevel(data?.workouts_count)),
    kg: data?.weight_lifted ?? 0,
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
          <p className="text-[22px] text-center">
            Log in to access your personal account
          </p>
          <Button variant="main" onClick={() => navigate(ROUTES.login)}>
            Login
          </Button>
        </>
      )}
    </article>
  );
};
