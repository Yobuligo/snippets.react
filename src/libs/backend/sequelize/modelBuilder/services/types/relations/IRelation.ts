import { Model, ModelStatic } from "sequelize";

/**
 * Represents any relation.
 */
export interface IRelation<TTarget extends object> {
  /**
   * Contains the target Sequelize model of this relation.
   */
  readonly model: ModelStatic<Model<TTarget, TTarget>>;
}
