import { getEnvParamOrNull } from "./getEnvParamOrNull";

/**
 * Returns the value of the given environment parameter {@link name}, or throws an error if the value doesn't exist.
 *
 * @example
 * ```typescript
 *  getEnvParam("DB_HOST"); // returns value of process.env.DB_HOST
 * ```
 */
export const getEnvParam = (name: string): string => {
  const param = getEnvParamOrNull(name);
  if (param === undefined || param === null) {
    throw new Error(
      `[getEnvParam] Error while loading environment parameter '${name}'. Parameter not found.`,
    );
  }
  return param;
};
