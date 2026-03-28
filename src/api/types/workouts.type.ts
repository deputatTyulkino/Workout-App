import type { AxiosPromise } from "axios";
import type { TProfile } from "../../schemas/profile.schema";
import type { TExercise } from "./exercises.type";

type TWorkouts = {
  id: number;
  name: string;
  is_completed: boolean;
};

type TDetailWorkout = {
  id: number;
  name: string;
  is_completed: boolean;
  description: string;
  duration: number;
  is_public: boolean;
  created_at: string;
  updated_at: string;
  author: Pick<TProfile, "id" | "username" | "email">;
  exercises: TExercise[];
};

export type TApiWorkouts = () => AxiosPromise<TWorkouts[]>;

export type TApiWorkout = (workout_id: number) => AxiosPromise<TDetailWorkout>;
