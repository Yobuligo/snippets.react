import { ModelIndexesOptions } from "sequelize";
import { ISequelizeModelDef } from "./ISequelizeModelDef";
import { IManyToManyRelation } from "./relations/IManyToManyRelation";
import { IOneToManyRelation } from "./relations/IOneToManyRelation";
import { IOneToOneRelation } from "./relations/IOneToOneRelation";
import { ISelfOneToManyRelation } from "./relations/ISelfOneToManyRelation";
import { ISelfOneToOneRelation } from "./relations/ISelfOneToOneRelation";

/**
 * Represents a config to create a whole Sequelize model with name, indexes, relations etc.
 */
export interface ISequelizeModelOptions extends ISequelizeModelDef<any> {
  readonly indexes: ModelIndexesOptions[];
  readonly manyToManyRelations: IManyToManyRelation<any, any>[];
  readonly oneToManyRelations: IOneToManyRelation<any, any>[];
  readonly oneToOneRelations: IOneToOneRelation<any, any>[];
  readonly selfOneToManyRelations: ISelfOneToManyRelation<any>[];
  readonly selfOneToOneRelations: ISelfOneToOneRelation<any>[];
  readonly excludedColumnsOnDefaultLoad: Set<string>;
}
