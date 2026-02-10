import { ISelfOneToXConfig } from "./ISelfOneToXConfig";

/**
 * Represents the config for a one to one recursive relation to themselves.
 */
export interface ISelfOneToOneConfig<
  TSource extends object,
> extends ISelfOneToXConfig<TSource> {}
