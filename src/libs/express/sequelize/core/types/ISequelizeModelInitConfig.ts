/**
 * Represents a config for initializing the Sequelize model.
 */
export interface ISequelizeModelInitConfig {
  /**
   * Rebuild columns, indexes.
   */
  alter?: boolean;

  /**
   * Recreate tables and delete content.
   */
  force?: boolean;
}
