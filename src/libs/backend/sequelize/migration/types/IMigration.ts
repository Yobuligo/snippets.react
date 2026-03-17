import { IMigrationDatabase } from "./IMigrationDatabase";

/**
 * Represents a specific migration to be executed for a specific database.
 */
export interface IMigration<TMigrationDatabase extends IMigrationDatabase> {
  up(context: TMigrationDatabase): Promise<void>;
  down(context: TMigrationDatabase): Promise<void>;
}
