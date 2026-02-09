import { IForeignKeyRelation } from "./IForeignKeyRelation";
import { IOneToManyConfig } from "./IOneToManyConfig";

/**
 * Represents the whole config to set up a one to many relation.
 */
export interface IOneToManyRelation<
  TSource extends object,
  TTarget extends object,
>
  extends IForeignKeyRelation<TTarget>, IOneToManyConfig<TSource, TTarget> {}
