import { IAToBConfig } from "./IAToBConfig";

/**
 * Represents the config for many to many relation.
 */
export interface IManyToManyConfig<
  TModelA extends object,
  TModelB extends object,
> extends IAToBConfig<TModelA, TModelB> {
  /**
   * Defines, if createdAt and updatedAt timestamps should be added to the model. Default is true.
   */
  readonly timestamps?: boolean;
}
