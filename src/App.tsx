import { RouterProvider } from "react-router";
import { router } from "./router/routes";
import { QueryProvider } from "./providers/QueryProvider";

function App() {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
}

export default App;
