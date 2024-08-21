import { IDateTimeSpan } from "./IDateTimeSpan";

/**
 * Returns if the given {@link value} is of type {@link IDateTimeSpan}.
 */
export const isDateTimeSpan = (value: object): value is IDateTimeSpan => {
  if (!("from" in value)) {
    return false;
  }

  if (!(value.from instanceof Date)) {
    return false;
  }

  if (!("to" in value)) {
    return false;
  }

  if (!(value.to instanceof Date)) {
    return false;
  }

  return true;
};
