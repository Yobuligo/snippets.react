/**
 * This type represents any kind of value which contains of the value itself and a function to update the value
 */
export type Value<T> = [
  value: T,
  setValue: (newValue: T | ((previous: T) => T)) => void
];
