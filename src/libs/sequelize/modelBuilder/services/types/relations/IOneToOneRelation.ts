import { IForeignKeyRelation } from "./IForeignKeyRelation";
import { IOneToOneConfig } from "./IOneToOneConfig";

/**
 * Represents the whole config to set up a one to one relation.
 */
export interface IOneToOneRelation<
  TSource extends object,
  TTarget extends object,
>
  extends IForeignKeyRelation<TTarget>, IOneToOneConfig<TSource, TTarget> {}
