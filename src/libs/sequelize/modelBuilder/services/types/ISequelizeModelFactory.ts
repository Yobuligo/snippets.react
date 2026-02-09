import { IDBModel } from "../../../core/types/IDBModel";
import { ISequelizeModelOptions } from "./ISequelizeModelOptions";

/**
 * Responsible for creating a Sequelize model.
 */
export interface ISequelizeModelFactory {
  /**
   * Creates a Sequelize model by the given {@link sequelizeModelOptions}.
   */
  create(sequelizeModelOptions: ISequelizeModelOptions): IDBModel<any, any>;
}
