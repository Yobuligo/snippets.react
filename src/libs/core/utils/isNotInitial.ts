import { isInitial } from "./isInitial";

export const isNotInitial = (value: any, trim: boolean = false): boolean =>
  !isInitial(value, trim);
