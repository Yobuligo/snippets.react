import { Model, ModelStatic } from "sequelize";
import { IManyToManyConfig } from "./IManyToManyConfig";

/**
 * Represents the whole config to set up a many to many relation.
 */
export interface IManyToManyRelation<
  TModelA extends object,
  TModelB extends object,
> extends IManyToManyConfig<TModelA, TModelB> {
  /**
   * Contains Sequelize model of A for this relation.
   */
  readonly modelA: ModelStatic<Model<TModelA, TModelA>>;

  /**
   * Contains Sequelize model of B for this relation.
   */
  readonly modelB: ModelStatic<Model<TModelB, TModelB>>;
}
