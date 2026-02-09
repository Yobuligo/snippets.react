import { getEnvParam } from "./libs/core/utils/getEnvParam";

export const AppConfig = {
  HOST: getEnvParam("REACT_APP_BACKEND_HOST"),
};
