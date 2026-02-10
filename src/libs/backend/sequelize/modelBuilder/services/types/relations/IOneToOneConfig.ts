import { IAToBConfig } from "./IAToBConfig";

/**
 * Represents the config for one to one relation.
 */
export interface IOneToOneConfig<
  TSource extends object,
  TTarget extends object,
> extends IAToBConfig<TSource, TTarget> {}
