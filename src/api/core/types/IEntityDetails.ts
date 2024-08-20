import { IEntity } from "./IEntity";

export type IEntityDetails<T extends IEntity> = Omit<
  T,
  "id" | "createdAt" | "updatedAt"
>;
