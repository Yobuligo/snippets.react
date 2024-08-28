import { configureRoutes } from "./core/configureRoutes";
import { route } from "./core/route";

/**
 * Contains all routes of the client
 */
export const AppRoutes = configureRoutes({
  login: route("/login"),
  homePage: route("/"),
  productPage: route("/products/:productId"),
});
