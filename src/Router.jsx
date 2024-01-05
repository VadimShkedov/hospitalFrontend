import { createBrowserRouter } from "react-router-dom";
import Registration from "./components/Pages/Registration";

const router = () => createBrowserRouter([
  {
    path: '/',
    element: <Registration />
  }
]);

export default router;
