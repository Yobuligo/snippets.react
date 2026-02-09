import { Sequelize } from "sequelize";

/**
 * Represents a sequelize database. It is required when initializing the model and associations.
 */
export interface ISequelizeDatabase {
  sequelize: Sequelize;
}
