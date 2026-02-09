import { IEntity } from "./IEntity";

/**
 * This type represents an *{@link IEntity}* without its technical properties.
 */
export type IEntityDetails<TEntity extends IEntity> = Omit<
  TEntity,
  "id" | "createdAt" | "updatedAt"
>;
