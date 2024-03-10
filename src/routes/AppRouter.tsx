import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";

/**
 * This constants contains the routes and its corresponding components.
 */
export const AppRouter = createBrowserRouter([
  {
    path: Routes.homePage.origin,
    element: <>HomePage</>,
  },
]);
