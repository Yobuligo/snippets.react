import { IMigrationDatabase } from "./IMigrationDatabase";

/**
 * Responsible for loading and executing one or many migrations for a specific database.
 */
export interface IMigrationExecutor<
  TMigrationDatabase extends IMigrationDatabase,
> {
  /**
   * Executes the migration for the given {@link migrationDatabase} and runs the migrations located in {@link path}.
   * The path must be of type:
   * ```
   *    path.join(__dirname, "../migrations")
   * ```
   */
  execute(migrationDatabase: TMigrationDatabase, path: string): Promise<void>;
}
