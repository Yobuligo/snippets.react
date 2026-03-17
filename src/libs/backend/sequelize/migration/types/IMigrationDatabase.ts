import { QueryInterface, Sequelize } from "sequelize";

/**
 * Represents a database to be migrated.
 * Provides access to the database via Sequelize.
 * Provides access to migration methods like add column, remove column etc. via queryInterface.
 *
 * Can be extended to provide additional required data.
 */
export interface IMigrationDatabase {
  readonly sequelize: Sequelize;
  readonly queryInterface: QueryInterface;
}
