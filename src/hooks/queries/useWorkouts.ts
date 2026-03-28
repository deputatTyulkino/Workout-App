import { useQuery } from "@tanstack/react-query";
import { WorkoutsServices } from "../../api/endpoints/workouts";

export const useWorokuts = () => {
  return useQuery({
    queryKey: ["workouts"],
    queryFn: WorkoutsServices.get_workouts,
    select: ({ data }) => data,
    retry: 2,
    retryDelay: 1000,
  });
};
