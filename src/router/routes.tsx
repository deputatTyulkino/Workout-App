import { createBrowserRouter } from "react-router";
import { Home } from "../pages/Home/Home";
import { Workouts } from "../pages/Workouts/Workouts";
import { Login } from "../pages/Auth/Login/Login";
import { Register } from "../pages/Auth/Register/Register";
import { PrivateRouter } from "./PrivateRouter";
import { Exercise } from "../pages/Exercise/Exercise";
import { NotFound } from "../pages/NotFound/NotFound";
import { Layout } from "../pages/Layout/Layout";
import { NewWorkout } from "../pages/NewWorkout/NewWorkout";
import { NewExercise } from "../pages/NewExercise/NewExercise";
import { Profile } from "../pages/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/auth",
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
      {
        path: "/workouts",
        element: (
          <PrivateRouter>
            <Workouts />
          </PrivateRouter>
        ),
        children: [
          {
            path: ":slug",
            element: <Exercise />,
            errorElement: <NotFound />,
          },
        ],
      },
      {
        path: "/create",
        children: [
          {
            path: "workout",
            element: <NewWorkout />,
          },
          {
            path: "exercise",
            element: <NewExercise />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
