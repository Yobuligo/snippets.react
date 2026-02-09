import { IDBModel } from "../../../core/types/IDBModel";
import { ISequelizeModelKeys } from "./ISequelizeModelKeys";
import { ISequelizeModelOptions } from "./ISequelizeModelOptions";

/**
 * Responsible for creating a Sequelize model.
 */
export interface ISequelizeModelFactory<TSource extends object> {
  /**
   * Creates a Sequelize model by the given {@link sequelizeModelOptions}.
   */
  create(
    sequelizeModelOptions: ISequelizeModelOptions,
  ): IDBModel<any, any> & ISequelizeModelKeys<TSource>;
}
