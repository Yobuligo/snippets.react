/**
 * This type represents a subset of *{@link T}*. Multiple keys can be separated by |.
 *
 * @example
 * interface IPerson {
 *   id: string;
 *   firstname: string;
 *   lastname: string;
 * }
 *
 * type IPersonShort = Subset<IPerson, "firstname" | "lastname">;
 */
export type Subset<T, K extends keyof T> = { [P in K]: T[K] };
