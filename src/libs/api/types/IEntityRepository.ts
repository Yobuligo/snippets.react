import { Transaction } from "sequelize";
import { IDBEntityModelRepo } from "../../../express/sequelize/core/types/IDBEntityModelRepo";
import { IEntity } from "./IEntity";
import { IEntityDetails } from "./IEntityDetails";
import { IEntitySelectOptions } from "./IEntitySelectOptions";
import { IEntitySubset } from "./IEntitySubset";
import { IRepository } from "./IRepository";

/**
 * An implementation of this interface represents a repository that provides CRUD operations to entities of type {@link TEntity}.
 */
export interface IEntityRepository<TEntity extends IEntity>
  extends IRepository<TEntity>,
    IDBEntityModelRepo<TEntity> {
  delete(entity: TEntity, transaction?: Transaction): Promise<boolean>;

  deleteById(id: string, transaction?: Transaction): Promise<boolean>;

  findAll<K extends keyof TEntity>(
    options?: IEntitySelectOptions<TEntity, K>
  ): Promise<IEntitySubset<TEntity, K>[]>;

  findById<K extends keyof TEntity>(
    id: string,
    fields: K[]
  ): Promise<IEntitySubset<TEntity, K> | undefined>;
  findById(id: string): Promise<TEntity | undefined>;

  insert<K extends keyof TEntity>(
    entity: IEntityDetails<TEntity>,
    fields: K[],
    transaction?: Transaction
  ): Promise<IEntitySubset<TEntity, K>>;
  insert(
    entity: IEntityDetails<TEntity>,
    transaction?: Transaction
  ): Promise<TEntity>;

  update(entity: TEntity, transaction?: Transaction): Promise<boolean>;

  updateAll<K extends keyof TEntity>(
    entities: TEntity[],
    fields: K[],
    transaction?: Transaction
  ): Promise<IEntitySubset<TEntity, K>[]>;
  updateAll(entities: TEntity[], transaction?: Transaction): Promise<TEntity[]>;

  upsert<K extends keyof TEntity>(
    entity: TEntity,
    fields: K[],
    transaction?: Transaction
  ): Promise<IEntitySubset<TEntity, K>>;
  upsert(entity: TEntity, transaction?: Transaction): Promise<TEntity>;

  upsertAll<K extends keyof TEntity>(
    entities: TEntity[],
    fields: K[],
    transaction?: Transaction
  ): Promise<IEntitySubset<TEntity, K>[]>;
  upsertAll(entities: TEntity[], transaction?: Transaction): Promise<TEntity[]>;
}
