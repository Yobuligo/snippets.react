import { IRelation } from "./IRelation";

/**
 * Represents a foreign key relation.
 */
export interface IForeignKeyRelation<
  TTarget extends object,
> extends IRelation<TTarget> {
  /**
   * Contains the target Sequelize model foreign key of this relation.
   */
  readonly foreignKey: keyof TTarget;
}
