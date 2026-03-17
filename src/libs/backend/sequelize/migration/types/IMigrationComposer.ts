import { IMigrationDatabase } from "./IMigrationDatabase";
import { IMigrationDatabaseLoader } from "./IMigrationDatabaseLoader";

/**
 * Responsible for composing database migrations by executing and observing them and handling errors.
 * Can execute migrations for multiple databases.
 */
export interface IMigrationComposer<
  TMigrationDatabaseLoader extends IMigrationDatabaseLoader<IMigrationDatabase>,
> {
  /**
   * Loads the database(s) by the given {@link migrationDatabaseLoader} and runs the migrations located in {@link path}.
   * The path must be of type:
   * ```
   *    path.join(__dirname, "../migrations")
   * ```
   */
  execute(
    migrationDatabaseLoader: TMigrationDatabaseLoader,
    path: string,
  ): Promise<void>;
}
