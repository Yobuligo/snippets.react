import { Subset } from "../../types/Subset";
import { IEntity } from "./IEntity";
import { IHaveId } from "./IHaveId";

/**
 * This type represents a subset of properties of an *{@link IEntity}* and its id.
 */
export type IEntitySubset<T extends IEntity, K extends keyof T> = Subset<T, K> &
  IHaveId;
