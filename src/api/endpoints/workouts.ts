import { WorkoutsUrlPath } from "../../constants/urlPath.const";
import { api } from "../config";
import type { TApiWorkout, TApiWorkouts } from "../types/workouts.type";

export const WorkoutsServices = {
  get_workouts: async () => {
    return await api.get(WorkoutsUrlPath.workouts);
  },
  get_workout: async (workout_id: number) => {
    return await api.get(WorkoutsUrlPath.detail_workout(workout_id));
  },
} satisfies {
  get_workouts: TApiWorkouts;
  get_workout: TApiWorkout;
};
