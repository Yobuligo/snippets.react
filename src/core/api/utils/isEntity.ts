import { IEntity } from "../types/IEntity";

/**
 * Returns if the given {@link value} is of type {@link IEntity}.
 */
export const isEntity = (
  value: object | undefined | null
): value is IEntity => {
  if (!value) {
    return false;
  }
  return "id" in value && "createdAt" in value && "updatedAt" in value;
};
