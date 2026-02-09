import { ExtractBooleanKeys } from "./ExtractBooleanKeys";

/**
 * This type returns a type that contains only properties from {@link T} of type boolean.
 */
export type BooleanKeys<T> = Pick<T, ExtractBooleanKeys<T>>;
