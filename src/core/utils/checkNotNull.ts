export const checkNotNull = <T>(value: T): NonNullable<T> => {
  if (value === undefined || value === null) {
    throw new Error(
      `Error while checking value. Value was expected to be not null.`
    );
  }
  return value;
};
