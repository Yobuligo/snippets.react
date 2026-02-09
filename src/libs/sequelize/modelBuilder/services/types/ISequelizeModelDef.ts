import { DataType, ModelAttributeColumnOptions } from "sequelize";

/**
 * Contains initial props for build a Sequelize model.
 */
export interface ISequelizeModelDef<T extends object> {
  /**
   * Defines the database table columns.
   */
  columns: {
    [K in keyof T]?: DataType | ModelAttributeColumnOptions<any>;
  };

  /**
   * Defines the database table name.
   */
  tableName: string;

  /**
   * Defines, if createdAt and updatedAt timestamps should be added to the model. Default is true.
   */
  timestamps?: boolean;
}
