import { RouterProvider } from "react-router";
import { router } from "./router/routes";
import { QueryProvider } from "./providers/QueryProvider";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </QueryProvider>
  );
}

export default App;
