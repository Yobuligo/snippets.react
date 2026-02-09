import { ModelIndexesOptions } from "sequelize";
import { ISequelizeModelDef } from "./ISequelizeModelDef";
import { IManyToManyRelation } from "./relations/IManyToManyRelation";
import { IOneToManyRelation } from "./relations/IOneToManyRelation";
import { IOneToOneRelation } from "./relations/IOneToOneRelation";

/**
 * Represents a config to create a whole Sequelize model with name, indexes, relations etc.
 */
export interface ISequelizeModelOptions extends ISequelizeModelDef<any> {
  readonly indexes: ModelIndexesOptions[];
  readonly manyToManyRelations: IManyToManyRelation<any>[];
  readonly oneToManyRelations: IOneToManyRelation<any, any>[];
  readonly oneToOneRelations: IOneToOneRelation<any, any>[];
  readonly excludedColumnsOnDefaultLoad: Set<string>;
}
