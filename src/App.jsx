import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Registration from "./components/Pages/Registration";

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Registration />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
