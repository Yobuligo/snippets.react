/**
 * This type extracts only keys from {@link T} of the given {@link TType}.
 */
export type ExtractTypeKeys<T, TType> = {
  [K in keyof T]: T[K] extends TType ? K : never;
}[keyof T];
