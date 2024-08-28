import { IEntity } from "./IEntity";
import { IEntityDetails } from "./IEntityDetails";
import { IEntitySubset } from "./IEntitySubset";
import { IRepository } from "./IRepository";

/**
 * An implementation of this interface represents a repository that provides CRUD operations to entities of type {@link TEntity}.
 */
export interface IEntityRepository<TEntity extends IEntity>
  extends IRepository<TEntity> {
  delete(entity: TEntity): Promise<boolean>;
  
  deleteById(id: string): Promise<boolean>;

  findAll<K extends keyof TEntity>(
    fields: K[]
  ): Promise<IEntitySubset<TEntity, K>[]>;
  findAll(): Promise<TEntity[]>;

  findById<K extends keyof TEntity>(
    id: string,
    fields: K[]
  ): Promise<IEntitySubset<TEntity, K> | undefined>;
  findById(id: string): Promise<TEntity | undefined>;

  insert<K extends keyof TEntity>(
    entity: IEntityDetails<TEntity>,
    fields: K[]
  ): Promise<IEntitySubset<TEntity, K>>;
  insert(entity: IEntityDetails<TEntity>): Promise<TEntity>;

  update<K extends keyof TEntity>(
    entity: TEntity,
    fields: K[]
  ): Promise<IEntitySubset<TEntity, K>>;
  update(entity: TEntity): Promise<TEntity>;

  updateAll<K extends keyof TEntity>(
    entities: TEntity[],
    fields: K[]
  ): Promise<IEntitySubset<TEntity, K>[]>;
  updateAll(entities: TEntity[]): Promise<TEntity[]>;
}
