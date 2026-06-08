import { SequelizeStorage, Umzug } from "umzug";
import { IMigrationDatabase } from "../types/IMigrationDatabase";
import { IMigrationExecutor } from "../types/IMigrationExecutor";
import { IMigrationInit } from "../types/IMigrationInit";

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
        glob: ["!(*.d).{js,ts}", { cwd: path }],
        resolve: ({ name, path: migrationPath }) => {
          const loadedModule = require(migrationPath!);

          // check for default export (CommonJS vs ESM)
          const migration = loadedModule.default || loadedModule;

          // Delete endings like .js or .ts from name for database comparison
          // Otherwise it is not recognized if a migration was already applied.
          const plainName = name.replace(/\.(ts|js)$/, "");
          console.log(`Run migration for name: ${plainName}`);

          // Init migration, required fo injecting db details for default functions
          (migration as IMigrationInit<TMigrationDatabase>).initialize(
            migrationDatabase,
          );

          return {
            name: plainName,
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
