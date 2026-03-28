export const ROUTES = {
  home: "/",
  profile: "/profile",
  login: "/auth/login",
  register: "/auth/register",
  workouts: "/workouts",
  workout: (id: number) => `/workouts/${id}`,
  exercises: (id: number) => `/workouts/${id}/exercises`,
  exercise: (workout_id: number, exercise_id: number) =>
    `/workouts/${workout_id}/exercises/${exercise_id}`,
  new_workout: "/create/workout",
  new_exercise: "/create/exercise",
} as const;
