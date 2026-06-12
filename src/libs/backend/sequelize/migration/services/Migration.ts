import {
  ColumnsDescription,
  Model,
  ModelStatic,
  QueryInterface,
  Sequelize,
  Transaction,
} from "sequelize";
import { IEntity } from "../../../../api/types/IEntity";
import { IEntityDetails } from "../../../../api/types/IEntityDetails";
import { checkNotNull } from "../../../../core/utils/checkNotNull";
import { IMigration } from "../types/IMigration";
import { IMigrationDatabase } from "../types/IMigrationDatabase";

/**
 * Represents a specific migration to be executed for a specific database.
 */
export abstract class Migration<
  TMigrationDatabase extends IMigrationDatabase,
> implements IMigration<TMigrationDatabase> {
  private _migrationDatabase: TMigrationDatabase | undefined;

  abstract up(migrationDatabase: TMigrationDatabase): Promise<void>;
  abstract down(migrationDatabase: TMigrationDatabase): Promise<void>;

  initialize(migrationDatabase: TMigrationDatabase) {
    this._migrationDatabase = migrationDatabase;
  }

  /**
   * Adds the column with name {@link columnName} to the table of the given {@link model}, if it doesn't exist yet.
   */
  protected async addColumn(
    model: ModelStatic<any>,
    columnName: string,
    transaction?: Transaction,
  ) {
    if (await this.doesColumnExists(model, columnName)) {
      return;
    }

    await this.queryInterface.addColumn(
      model.tableName,
      columnName,
      model.getAttributes()[columnName],
      { transaction },
    );
  }

  /**
   * Adds the index with name {@link indexName} and {@link attributes} to the table of the given {@link model}, if it doesn't exist yet.
   */
  protected async addIndex<T extends IEntity>(
    model: ModelStatic<Model<T, IEntityDetails<T>>>,
    indexName: string,
    attributes: (keyof T)[],
    transaction?: Transaction,
  ) {
    if (await this.doesIndexExists(model, indexName)) {
      return;
    }

    const attributesResolved = attributes.map((attribute) =>
      attribute.toString(),
    );
    await this.queryInterface.addIndex(model.tableName, attributesResolved, {
      name: indexName,
      transaction,
    });
  }

  /**
   * Creates a table for the given {@link model}, if it doesn't exist, otherwise do nothing.
   */
  protected async createTable(
    model: ModelStatic<any>,
    transaction?: Transaction,
  ) {
    if (await this.doesTableExists(model)) {
      return;
    }

    await this.queryInterface.createTable(
      model.tableName,
      model.getAttributes(),
      { transaction },
    );
  }

  /**
   * Deletes the column with name {@link columnName} of the table for the given {@link model}.
   */
  protected async deleteColumn(
    model: ModelStatic<any>,
    columnName: string,
    transaction?: Transaction,
  ) {
    if (!(await this.doesColumnExists(model, columnName))) {
      return;
    }

    const dialect = this.sequelize.getDialect();
    if (dialect === "mariadb" || dialect === "mysql") {
      await this.sequelize.query(
        `ALTER TABLE \`${model.tableName}\` DROP COLUMN \`${columnName}\`;`,
        { transaction },
      );
    } else {
      await this.queryInterface.removeColumn(model.tableName, columnName, {
        transaction,
      });
    }
  }

  /**
   * Deletes the index with name {@link indexName} of the table for the given {@link model}.
   */
  protected async deleteIndex(
    model: ModelStatic<any>,
    indexName: string,
    transaction?: Transaction,
  ) {
    await this.queryInterface.removeIndex(model.tableName, indexName, {
      transaction,
    });
  }

  /**
   * Deletes the table of the given {@link model}.
   */
  protected async deleteTable(
    model: ModelStatic<any>,
    transaction?: Transaction,
  ) {
    if (!(await this.doesTableExists(model))) {
      return;
    }

    await this.queryInterface.dropTable(model.tableName, { transaction });
  }

  /**
   * Returns column details for the table of the given {@link model}.
   */
  protected async describeTable(
    model: ModelStatic<any>,
  ): Promise<ColumnsDescription> {
    return await this.queryInterface.describeTable(model.tableName);
  }

  /**
   * Returns if the column with name {@link columnName} already exists in the table of the given {@link model}.
   */
  protected async doesColumnExists(
    model: ModelStatic<any>,
    columnName: string,
  ): Promise<boolean> {
    const tableInfo = await this.describeTable(model);
    return tableInfo[columnName] !== undefined;
  }

  /**
   * Returns if the table of the given {@link model} contains the index {@link indexName}.
   */
  protected async doesIndexExists(
    model: ModelStatic<any>,
    indexName: string,
  ): Promise<boolean> {
    try {
      const indexes = (await this.queryInterface.showIndex(
        model.tableName,
      )) as any[];
      return indexes.some((index: any) => index.name === indexName);
    } catch {
      // table doesn't exist yet
      return false;
    }
  }

  /**
   * Returns if the table of the given {@link model} already exists.
   */
  protected async doesTableExists(model: ModelStatic<any>): Promise<boolean> {
    return (await this.describeTable(model)) !== undefined;
  }

  /**
   * Returns the underlying migration database.
   */
  protected get migrationDatabase(): TMigrationDatabase {
    return checkNotNull(this._migrationDatabase);
  }

  /**
   * Returns the query interface to the underlying migration database.
   */
  protected get queryInterface(): QueryInterface {
    return this.migrationDatabase.queryInterface;
  }

  /**
   * Returns the sequelize connection to the underlying migration database.
   */
  protected get sequelize(): Sequelize {
    return this.migrationDatabase.sequelize;
  }
}
