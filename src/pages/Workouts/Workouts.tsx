import { Heading } from "../../components/ui/Heading/Heading";
import { useWorokuts } from "../../hooks/queries/useWorkouts";
import bg from "../../assets/images/register.jpg";
import { HiCheck } from "react-icons/hi";
import { Link } from "react-router";
import { ROUTES } from "../../constants/routes.const";
import { useQueryClient } from "@tanstack/react-query";
import { WorkoutsServices } from "../../api/endpoints/workouts";

export const Workouts = () => {
  const { data, status, error } = useWorokuts();
  const client = useQueryClient();

  const prefetchWorkout = async (workout_id: number) => {
    await client.prefetchQuery({
      queryKey: ["workout", workout_id],
      queryFn: () => WorkoutsServices.get_workout(workout_id),
    });
  };

  if (status === "error") {
    return <Heading>{error.message}</Heading>;
  }

  if (status === "pending") {
    return <Heading>Loading...</Heading>;
  }

  return (
    <article className="flex flex-col items-center gap-10">
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="fxied inset-bs-0 bg-no-repeat bg-center-top bg-cover py-2.5! px-6.25! rounded-b-[15px] shadow-accent max-block-[30%] block-[30%] inline-full flex flex-col justify-end items-start "
      >
        <Heading>Workouts</Heading>
      </div>
      <div className="inline-full flex flex-col gap-7.5 px-6.25!">
        {data.map((workout) => (
          <Link
            onMouseEnter={() => prefetchWorkout(workout.id)}
            to={{ pathname: ROUTES.workout(workout.id) }}
            key={workout.id}
            className="hover:bg-brown transition-colors duration-300 inline-full block-15 flex justify-between items-center py-3.75! px-5! bg-light-brown rounded-[10px]"
          >
            <span className="text-2xl font-normal">{workout.name}</span>
            {workout.is_completed && <HiCheck size={30} />}
          </Link>
        ))}
      </div>
    </article>
  );
};
