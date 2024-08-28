import { createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

/**
 * This constants contains the routes and its corresponding components.
 */
export const AppRouter = createBrowserRouter([
  {
    path: AppRoutes.homePage.origin,
    element: <>HomePage</>,
  },
  {
    path: AppRoutes.productPage.origin,
    element: <></>,
  },
]);
