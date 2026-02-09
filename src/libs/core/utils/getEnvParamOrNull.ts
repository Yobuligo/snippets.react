/**
 * Returns the value of the given environment parameter {@link name}, or undefined if the value doesn't exist.
 *
 * @example
 * ```typescript
 *  getEnvParamOrNull("DB_HOST"); // returns value of process.env.DB_HOST
 * ```
 */
export const getEnvParamOrNull = (name: string): string | undefined => {
  return process.env[name];
};
