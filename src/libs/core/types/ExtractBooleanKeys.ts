import { ExtractTypeKeys } from "./ExtractTypeKeys";

/**
 * This type extracts only keys of type boolean from {@link T}.
 */
export type ExtractBooleanKeys<T> = ExtractTypeKeys<T, boolean>;
