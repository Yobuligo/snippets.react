import { MigrationError } from "../errors/MigrationError";
import { IMigrationComposer } from "../types/IMigrationComposer";
import { IMigrationDatabase } from "../types/IMigrationDatabase";
import { IMigrationDatabaseLoader } from "../types/IMigrationDatabaseLoader";
import { MigrationExecutor } from "./MigrationExecutor";
import { MigrationState } from "./MigrationState";

/**
 * Responsible for composing database migrations by executing, observing it and handling errors.
 * Can execute migrations for certain databases.
 */
export class MigrationComposer<
  TMigrationDatabaseLoader extends IMigrationDatabaseLoader<IMigrationDatabase>,
> implements IMigrationComposer<TMigrationDatabaseLoader> {
  async execute(
    migrationDatabaseLoader: TMigrationDatabaseLoader,
    path: string,
  ): Promise<void> {
    console.info(`[MigrationComposer] Start migrate databases.`);

    if (MigrationState.isRunning) {
      throw new MigrationError(
        `[MigrationComposer] Error while executing migration. Migration is already running.`,
      );
    }

    MigrationState.setRunning(true);

    try {
      await this.migrateDatabases(migrationDatabaseLoader, path);
    } finally {
      MigrationState.setRunning(false);
      console.info(`[MigrationComposer] Finish migrate databases.`);
    }
  }

  private async migrateDatabases(
    migrationDatabaseLoader: TMigrationDatabaseLoader,
    path: string
  ): Promise<void> {
    const migrationDatabases = await migrationDatabaseLoader.load();
    for (const migrationDatabase of migrationDatabases) {
      const databaseName = migrationDatabase.sequelize.getDatabaseName();

      try {
        console.info(
          `[MigrationComposer] Start migration of database '${databaseName}'.`,
        );

        await new MigrationExecutor().execute(migrationDatabase, path);

        console.info(
          `[MigrationComposer] Complete migration of database '${databaseName}'.`,
        );
      } catch (error) {
        console.error(
          `[MigrationComposer] Error while migrating database '${databaseName}'.`,
          error,
        );
      }
    }
  }
}
