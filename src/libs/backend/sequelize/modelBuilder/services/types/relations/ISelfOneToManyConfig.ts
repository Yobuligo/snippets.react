import { ISelfOneToXConfig } from "./ISelfOneToXConfig";

/**
 * Represents the config for a one to many recursive relation to themselves.
 */
export interface ISelfOneToManyConfig<
  TSource extends object,
> extends ISelfOneToXConfig<TSource> {}
