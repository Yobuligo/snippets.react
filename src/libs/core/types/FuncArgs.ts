/**
 * This type infers the arguments from the given function of type {@link TFunction}.
 */
export type FuncArgs<TFunction extends Function> = TFunction extends (
  ...args: infer TArgs
) => any
  ? TArgs
  : [];
