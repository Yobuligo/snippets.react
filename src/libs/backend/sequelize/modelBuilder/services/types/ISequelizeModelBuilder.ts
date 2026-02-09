import { ModelStatic } from "sequelize/types/model";

import { Model } from "sequelize";
import { IDBModel } from "../../../core/types/IDBModel";
import { IManyToManyConfig } from "./relations/IManyToManyConfig";
import { IOneToManyConfig } from "./relations/IOneToManyConfig";
import { IOneToOneConfig } from "./relations/IOneToOneConfig";

/**
 * Responsible for building a Sequelize model for the given {@link TSource}.
 */
export interface ISequelizeModelBuilder<TSource extends object> {
  /**
   * Adds an index to the model to be build with the given {@link name} and {@link columns} and defines if it should be {@link unique}.
   */
  addIndex(
    name: string,
    columns: (keyof TSource)[],
    unique?: boolean,
  ): ISequelizeModelBuilder<TSource>;

  /**
   * Builds the Sequelize model
   */
  build(): IDBModel<TSource, TSource>;

  /**
   * Adds a many to many relation from {@link TSource} to the given target {@link model}.
   * The relations are persisted in the relation table of the given {@link tableName}.
   */
  manyToMany<TTarget extends object>(
    model: ModelStatic<Model<TTarget, TTarget>>,
    tableName: string,
    config?: IManyToManyConfig,
  ): ISequelizeModelBuilder<TSource>;

  /**
   * Adds a one to many relation from {@link TSource} to the given target {@link model}.
   * The {@link foreignKey} is located in the target {@link model}.
   * The {@link config} contains additional props to define the relation, like deleteCascading.
   */
  oneToMany<TTarget extends object>(
    model: ModelStatic<Model<TTarget, TTarget>>,
    foreignKey: keyof TTarget,
    config?: IOneToManyConfig<TSource, TTarget>,
  ): ISequelizeModelBuilder<TSource>;

  /**
   * Adds a one to one relation from {@link TSource} to the given target {@link model}.
   * The {@link foreignKey} is located in the target {@link model}.
   * The {@link config} contains additional props to define the relation, like deleteCascading.
   */
  oneToOne<TTarget extends object>(
    model: ModelStatic<Model<TTarget, TTarget>>,
    foreignKey: keyof TTarget,
    config?: IOneToOneConfig<TSource, TTarget>,
  ): ISequelizeModelBuilder<TSource>;
}
