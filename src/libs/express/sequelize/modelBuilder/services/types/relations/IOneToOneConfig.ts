import { IOneToXConfig } from "./IOneToXConfig";

/**
 * Represents the config for one to one relation.
 */
export interface IOneToOneConfig<
  TSource extends object,
  TTarget extends object,
> extends IOneToXConfig<TSource, TTarget> {}
