import { IMigrationDatabase } from "./IMigrationDatabase";

/**
 * Responsible for loading the database(s) to be migrated.
 */
export interface IMigrationDatabaseLoader<
  TMigrationDatabase extends IMigrationDatabase,
> {
  load(): Promise<TMigrationDatabase[]>;
}
