export const AuthUrlPath = {
  login: "/auth/login/",
  register: "/auth/register/",
  refresh: "/auth/refresh/",
  verify: "/auth/verify/",
  me: "/auth/me/",
} as const;

export const ExercisesUrlPath = {
  exercises: "/exercises/",
  detail_exercise: (id: number) => `/exercises/${id}/`,
  exercises_categories: "/exercises/categories/",
} as const;

export const WorkoutsUrlPath = {
  workouts: "/workouts/",
  detail_workout: (id: number) => `/workouts/${id}/`,
} as const;
