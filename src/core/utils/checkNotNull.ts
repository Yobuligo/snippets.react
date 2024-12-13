/**
 * This function is responsible for checking if the given {@link value} is not null and not undefined.
 * It returns {@link value} as a non nullable value. Throws an error, if {@link value} is null or undefined.
 */
export const checkNotNull = <T>(value: T): NonNullable<T> => {
  if (value === undefined || value === null) {
    throw new Error(
      `Error while checking value. Value was expected to be not null.`
    );
  }
  return value;
};
