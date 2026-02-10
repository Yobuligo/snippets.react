import { IDeleteCascade } from "./IDeleteCascade";

/**
 * Represents the config for any A to B relation (so oneToOne, oneToMany, manyToMany).
 */
export interface IAToBConfig<
  TModelA extends object,
  TModelB extends object,
> extends IDeleteCascade {
  /**
   * Defines the property name on source entity that will be populated with the related target entity when the relation is loaded.
   */
  fillSourceProp?: keyof TModelA;

  /**
   * Defines the property name on the target entity that will be populated with the related source entity when the relation is loaded.
   */
  fillTargetProp?: keyof TModelB;
}
