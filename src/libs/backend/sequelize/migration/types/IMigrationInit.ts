import { IMigrationDatabase } from "./IMigrationDatabase";

export interface IMigrationInit<TMigrationDatabase extends IMigrationDatabase> {
  initialize(migrationDatabase: TMigrationDatabase): void;
}
