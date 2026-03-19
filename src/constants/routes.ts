export const ROUTES = {
  home: "/",
  profile: "/profile",
  login: "/auth/login",
  register: "/auth/register",
  workouts: "/workouts",
  workout: (id: number) => `/workouts/${id}`,
  exercises: "/exercises",
  exercise: (id: number) => `/workouts/${id}`,
  new_workout: "/create/workout",
  new_exercise: "/create/exercise",
} as const;
