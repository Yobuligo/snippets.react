import { SequelizeStorage, Umzug } from "umzug";
import { IMigrationDatabase } from "../types/IMigrationDatabase";
import { IMigrationExecutor } from "../types/IMigrationExecutor";

/**
 * Responsible for loading and executing one or many migrations for a specific database.
 */
export class MigrationExecutor<
  TMigrationDatabase extends IMigrationDatabase,
> implements IMigrationExecutor<TMigrationDatabase> {
  async execute(
    migrationDatabase: TMigrationDatabase,
    path: string,
  ): Promise<void> {
    const sequelize = migrationDatabase.sequelize;

    const umzug = new Umzug({
      migrations: {
        glob: ["*.js", { cwd: path }],
        resolve: ({ name, path }) => {
          const migration = require(path!);
          return {
            name,
            up: async () => migration.up(migrationDatabase),
            down: async () => migration.down(migrationDatabase),
          };
        }, // convert simple migration parameter to migrationDatabase that provides access to the Sequelize, QueryInterface and additional required props.
      },
      context: sequelize.getQueryInterface(),
      storage: new SequelizeStorage({ sequelize }),
      logger: console,
    });

    const pending = await umzug.pending();
    if (pending.length === 0) {
      console.info(
        `[MigrationExecutor] No migrations to be applied to '${sequelize.getDatabaseName()}'.`,
      );
      return;
    }

    console.info(
      `[MigrationExecutor] Executing ${pending.length} migrations for '${sequelize.getDatabaseName()}'.`,
    );
    await umzug.up();
  }
}
