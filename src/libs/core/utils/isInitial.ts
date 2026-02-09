import { isNull } from "./isNull";

export const isInitial = (value: any): boolean => {
  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === "string") {
    return value.length === 0;
  }

  if (typeof value === "number") {
    return value === 0;
  }

  return isNull(value);
};
