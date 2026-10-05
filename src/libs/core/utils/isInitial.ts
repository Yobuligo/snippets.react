import { isNull } from "./isNull";

/**
 * Returns true if the given {@link value} is initial (null, undefined, an empty string or array, or 0).
 * If {@link trim} is true, strings which contain only whitespaces are considered initial as well.
 */
export const isInitial = (value: any, trim: boolean = false): boolean => {
  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === "string") {
    return (trim ? value.trim() : value).length === 0;
  }

  if (typeof value === "number") {
    return value === 0;
  }

  return isNull(value);
};
