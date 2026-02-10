import { IAToBConfig } from "./IAToBConfig";

/**
 * Represents the config for one to many relation.
 */
export interface IOneToManyConfig<
  TSource extends object,
  TTarget extends object,
> extends IAToBConfig<TSource, TTarget> {}
