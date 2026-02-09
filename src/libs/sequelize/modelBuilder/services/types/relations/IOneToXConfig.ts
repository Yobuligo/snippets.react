/**
 * Represents the config for any one to x relation (so one or many).
 */
export interface IOneToXConfig<TSource extends object, TTarget extends object> {
  /**
   * Determines whether the related target entity should be automatically deleted when the source entity is deleted.
   */
  deleteCascade?: boolean;

  /**
   * Defines the property name on the source entity that will be populated with the related target entity when the relation is loaded.
   */
  fillSourceProp?: keyof TSource;

  /**
   * Defines the property name on the target entity that will be populated with the related source entity when the relation is loaded.
   */
  fillTargetProp?: keyof TTarget;
}
