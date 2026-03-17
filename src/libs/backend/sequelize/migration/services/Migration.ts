import { IMigration } from "../types/IMigration";
import { IMigrationDatabase } from "../types/IMigrationDatabase";

/**
 * Represents a specific migration to be executed for a specific database.
 */
export abstract class Migration<
  TMigrationDatabase extends IMigrationDatabase,
> implements IMigration<TMigrationDatabase> {
  abstract up(migrationDatabase: TMigrationDatabase): Promise<void>;
  abstract down(migrationDatabase: TMigrationDatabase): Promise<void>;
}
