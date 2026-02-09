import { IManyToManyConfig } from "./IManyToManyConfig";
import { IRelation } from "./IRelation";

/**
 * Represents the whole config to set up a many to many relation.
 */
export interface IManyToManyRelation<TTarget extends object>
  extends IRelation<TTarget>, IManyToManyConfig {
  /**
   * Provides the name of the relation table.
   */
  readonly tableName: string;
}
