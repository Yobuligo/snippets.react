import { ModelStatic } from "sequelize/types/model";

import { Model } from "sequelize";
import { IDBModel } from "../../../core/types/IDBModel";
import { ISequelizeModelKeys } from "./ISequelizeModelKeys";
import { IManyToManyConfig } from "./relations/IManyToManyConfig";
import { IOneToManyConfig } from "./relations/IOneToManyConfig";
import { IOneToOneConfig } from "./relations/IOneToOneConfig";
import { ISelfOneToManyConfig } from "./relations/ISelfOneToManyConfig";

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
  build(): IDBModel<TSource, TSource> & ISequelizeModelKeys<TSource>;

  /**
   * Excludes the given {@link columns} from the default load.
   * This means these columns won't be loaded with e.g. sequelize.findOne(), sequelize.findByPK() etc.
   * These columns must be requested explicitly in db requests.
   *
   * Required e.g. for sensitive information like password hashes, salts etc.
   */
  excludeOnDefaultLoad(
    ...columns: (keyof TSource)[]
  ): ISequelizeModelBuilder<TSource>;

  /**
   * Adds a many to many relation from {@link modelA} to {@link modelB}, while this Model {@link TSource} is the relation table.
   */
  manyToMany<TModelA extends object, TModelB extends object>(
    modelA: ModelStatic<Model<TModelA, TModelA>>,
    modelB: ModelStatic<Model<TModelB, TModelB>>,
    config?: IManyToManyConfig<TModelA, TModelB>,
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

  /**
   * Adds a self one to many relation to {@link TSource}. A relation that refers to themselves.
   * The {@link foreignKey} is located at the model itself.
   * The {@link config} contains additional props to define the relation, like deleteCascading.
   * For relation to themselves it is required to fill the prop fillSourceProp or fillTargetProp.
   */
  selfOneToMany(
    foreignKey: keyof TSource,
    config: ISelfOneToManyConfig<TSource>,
  ): ISequelizeModelBuilder<TSource>;

  /**
   * Adds a self one to one relation to {@link TSource}. A relation that refers to themselves.
   * The {@link foreignKey} is located at the model itself.
   * The {@link config} contains additional props to define the relation, like deleteCascading.
   * For relation to themselves it is required to fill the prop fillSourceProp or fillTargetProp.
   */
  selfOneToOne(
    foreignKey: keyof TSource,
    config: ISelfOneToManyConfig<TSource>,
  ): ISequelizeModelBuilder<TSource>;
}
