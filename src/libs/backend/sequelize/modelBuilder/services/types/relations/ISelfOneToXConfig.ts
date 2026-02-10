import { IDeleteCascade } from "./IDeleteCascade";

/**
 * Represents the config for a recursive relation to themselves.
 */
export interface ISelfOneToXConfig<
  TSource extends object,
> extends IDeleteCascade {
  /**
   * Defines the property name on the source entity that will be populated with the related children entities when the relation is loaded.
   * For recursive relations this property has to be provided
   */
  fillSourceProp: keyof TSource;

  /**
   * Defines the property name on the target child entity that will be populated with the related parent entity when the relation is loaded.
   */
  fillTargetProp: keyof TSource;
}
