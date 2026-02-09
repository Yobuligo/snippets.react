import { SortOrder } from "./SortOrder";

export type OrderBy<T> = [name: keyof T, sortOrder: SortOrder];
