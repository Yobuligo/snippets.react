import { configureRoutes } from "./core/configureRoutes";
import { route } from "./core/route";

/**
 * This constant contains the routes for this app.
 */
export const Routes = configureRoutes({
  homePage: route("/"),
});
