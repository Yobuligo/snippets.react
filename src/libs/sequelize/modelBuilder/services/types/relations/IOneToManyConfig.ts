import { IOneToXConfig } from "./IOneToXConfig";

/**
 * Represents the config for one to many relation.
 */
export interface IOneToManyConfig<
  TSource extends object,
  TTarget extends object,
> extends IOneToXConfig<TSource, TTarget> {}
