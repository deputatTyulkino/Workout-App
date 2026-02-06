export const ROUTES = {
  home: "/",
  profile: "/profile",
  login: "/auth/login",
  register: "/auth/register",
  workouts: "/workouts",
  exercise: (slug: string) => `/workouts/${slug}`,
  new_workout: "/create/workout",
  new_exercise: "/create/exercise",
} as const;
