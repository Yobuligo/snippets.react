import { isNull } from "./isNull";

/**
 * This function returns true if the given {@link value} is initial, otherwise false.
 * Returns true if:
 * 1. {@link value} is an array and has no entries
 * 2. {@link value} is of type string with a length of 0
 * 3. {@link value} is of type number and the value is 0
 * 4. {@link value} is an object which is null
 * 5. {@link value} is undefined
 */
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
