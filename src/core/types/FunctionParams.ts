/**
 * This type infers the parameters of a function
 */
export type FunctionParams<T extends Function> = T extends (
  ...args: infer TParams
) => void
  ? TParams
  : [];
