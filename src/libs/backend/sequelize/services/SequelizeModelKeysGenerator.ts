import { Model, ModelStatic } from "sequelize";
import { IEntity } from "../../../api/types/IEntity";
import { IEntityDetails } from "../../../api/types/IEntityDetails";
import { ISequelizeModelKeys } from "../modelBuilder/services/types/ISequelizeModelKeys";
import { SequelizeModelKeys } from "../modelBuilder/services/types/SequelizeModelKeys";

export class SequelizeModelKeysGenerator<
  TEntity extends IEntity,
> implements ISequelizeModelKeys<TEntity> {
  constructor(
    private readonly model: ModelStatic<
      Model<TEntity, IEntityDetails<TEntity>>
    >,
  ) {}

  get keys(): SequelizeModelKeys<TEntity> {
    const sequelizeModelKeys = {} as SequelizeModelKeys<TEntity>;
    for (const attributeName in this.model.getAttributes()) {
      sequelizeModelKeys[attributeName] = attributeName;
    }
    return sequelizeModelKeys;
  }

  get keyList(): (keyof TEntity)[] {
    const keyList: (keyof TEntity)[] = [];
    for (const attributeName in this.model.getAttributes()) {
      keyList.push(attributeName);
    }
    return keyList;
  }
}
