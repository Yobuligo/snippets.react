import { isInitial } from "./isInitial";

/**
 * This function returns true if the given {@link value} is not initial, otherwise false.
 * 
 * Returns true if:
 * 1. {@link value} is an array and having at least one entry
 * 2. {@link value} is of type string and having at least a length of 1
 * 3. {@link value} is of type number and the value is greater or smaller 0
 * 4. {@link value} is an object which is not null
 * 5. {@link value} is defined / not undefined
 */
export const isNotInitial = (value: any): boolean => !isInitial(value);
