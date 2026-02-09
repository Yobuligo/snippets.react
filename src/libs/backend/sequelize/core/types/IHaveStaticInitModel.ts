import { ISequelizeDatabase } from "./ISequelizeDatabase";

/**
 * Represents a model that can be initialized via static method initModel.
 */
export type IHaveStaticInitModel = {
  /**
   * Initialize the model for the given {@link sequelizeDatabase}.
   */
  initModel(sequelizeDatabase: ISequelizeDatabase): void;
};
