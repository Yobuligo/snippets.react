import { ISequelizeDatabase } from "./ISequelizeDatabase";

/**
 * Represents a model whose associations can be initialized via static method associate.
 */
export type IHaveStaticAssociate = {
  /**
   * Setup the associations for this model.
   * The {@link sequelizeDatabase} provides access to other model instances for creating relations.
   */
  associate(sequelizeDatabase: ISequelizeDatabase): void;
};
