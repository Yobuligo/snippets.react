/**
 * Represents the config for many to many relation.
 */
export interface IManyToManyConfig {
  /**
   * Defines, if createdAt and updatedAt timestamps should be added to the model. Default is true.
   */
  readonly timestamps?: boolean;
}
