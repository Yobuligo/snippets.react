import { IDBModel } from "../../../core/types/IDBModel";
import { ISequelizeModelOptions } from "./ISequelizeModelOptions";

/**
 * Responsible for creating sequelize relations between models.
 */
export interface ISequelizeRelationFactory {
  addManyToManyRelations(
    sequelizeModelOptions: ISequelizeModelOptions,
    newModel: IDBModel<any, any>,
  ): void;

  addOneToManyRelations(
    sequelizeModelOptions: ISequelizeModelOptions,
    newModel: IDBModel<any, any>,
  ): void;

  addOneToOneRelations(
    sequelizeModelOptions: ISequelizeModelOptions,
    newModel: IDBModel<any, any>,
  ): void;

  addSelfOneToManyRelations(
    sequelizeModelOptions: ISequelizeModelOptions,
    newModel: IDBModel<any, any>,
  ): void;

  addSelfOneToOneRelations(
    sequelizeModelOptions: ISequelizeModelOptions,
    newModel: IDBModel<any, any>,
  ): void;
}
