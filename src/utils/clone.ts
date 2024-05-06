import { NotSupportedError } from "../core/errors/NotSupportedError";

/**
 * Creates a deep clone of the given {@link value}, which also clones properties which are objects and arrays.
 */
export const clone = <T>(value: T): T => {
  if (value === null) {
    return value;
  }

  switch (typeof value) {
    case "function": {
      throw new NotSupportedError();
    }
    case "object": {
      if (value instanceof Array) {
        const clones: any[] = [];
        value.forEach((item) => {
          clones.push(clone(item));
        });
        return clones as T;
      }

      if (value instanceof Date) {
        return new Date(value.getTime()) as T;
      }

      const cloneObject: T = {} as T;
      for (const propName in value) {
        cloneObject[propName] = clone(value[propName]);
      }
      return cloneObject;
    }
    default:
      return value;
  }
};
