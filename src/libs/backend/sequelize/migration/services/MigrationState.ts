/**
 * Responsible for locking and restricting the execution of a migration to one {@link IMigrationComposer}.
 */
export class MigrationState {
  static readonly migrationRunningProp = "__migrationRunning";

  static get isRunning(): boolean {
    return (globalThis as any)[this.migrationRunningProp] === true;
  }

  static setRunning(running: boolean) {
    (globalThis as any)[this.migrationRunningProp] = running;
  }
}
