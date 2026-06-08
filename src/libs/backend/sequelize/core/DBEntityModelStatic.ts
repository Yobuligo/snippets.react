import { Model, ModelStatic } from "sequelize";
import { IEntity } from "../../../api/types/IEntity";
import { IEntityDetails } from "../../../api/types/IEntityDetails";
import { SequelizeModelKeys } from "../modelBuilder/services/types/SequelizeModelKeys";
import { SequelizeModelKeysGenerator } from "../services/SequelizeModelKeysGenerator";

/**
 * Creates an abstract super class for model classes, with access to key props of the underlying {@link base} model.
 */
export function DBEntityModelStatic<TEntity extends IEntity>(
  base: ModelStatic<Model<TEntity, IEntityDetails<TEntity>>>,
) {
  return class Entity extends base {
    static readonly keys: SequelizeModelKeys<TEntity> =
      new SequelizeModelKeysGenerator(base).keys;
    static readonly keyList: (keyof TEntity)[] =
      new SequelizeModelKeysGenerator(base).keyList;
  };
}
