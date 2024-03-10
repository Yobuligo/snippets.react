import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";

export const AppRouter = createBrowserRouter([
  {
    path: Routes.homePage.origin,
    element: <>HomePage</>,
  },
]);
