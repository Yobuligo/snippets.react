import { IEntity } from "../../core/api/types/IEntity";
import { IEntityDetails } from "../../core/api/types/IEntityDetails";
import { IEntityRepository } from "../../core/api/types/IEntityRepository";
import { IEntitySubset } from "../../core/api/types/IEntitySubset";
import { Repository } from "./Repository";
import { RESTApi } from "./RESTApi";

export abstract class EntityRepository<TEntity extends IEntity>
  extends Repository<TEntity>
  implements IEntityRepository<TEntity>
{
  async delete(entity: TEntity): Promise<boolean> {
    return await this.deleteById(entity.id);
  }

  async deleteById(id: string): Promise<boolean> {
    return await RESTApi.delete(`${this.url}/${id}`);
  }

  findAll<K extends keyof TEntity>(
    fields: K[]
  ): Promise<IEntitySubset<TEntity, K>[]>;
  findAll(): Promise<TEntity[]>;
  async findAll(fields?: unknown): Promise<unknown> {
    const requestFields = this.getFields(fields);
    return await RESTApi.get(`${this.url}`, {
      fields: requestFields,
    });
  }

  findById<K extends keyof TEntity>(
    id: string,
    fields: K[]
  ): Promise<IEntitySubset<TEntity, K> | undefined>;
  findById(id: string): Promise<TEntity | undefined>;
  async findById(id: unknown, fields?: unknown): Promise<unknown> {
    const requestFields = this.getFields(fields);
    return await RESTApi.get(`${this.url}/${id}`, { fields: requestFields });
  }

  insert<K extends keyof TEntity>(
    entity: IEntityDetails<TEntity>,
    fields: K[]
  ): Promise<IEntitySubset<TEntity, K>>;
  insert(entity: IEntityDetails<TEntity>): Promise<TEntity>;
  async insert(entity: unknown, fields?: unknown): Promise<unknown> {
    const requestFields = this.getFields(fields);
    return await RESTApi.post(`${this.url}`, entity, { fields: requestFields });
  }

  update<K extends keyof TEntity>(
    entity: TEntity,
    fields: K[]
  ): Promise<IEntitySubset<TEntity, K>>;
  update(entity: TEntity): Promise<TEntity>;
  async update(entity: TEntity, fields?: unknown): Promise<unknown> {
    const requestFields = this.getFields(fields);
    return await RESTApi.put(`${this.url}/${entity.id}`, entity, {
      fields: requestFields,
    });
  }

  updateAll<K extends keyof TEntity>(
    entities: TEntity[],
    fields: K[]
  ): Promise<IEntitySubset<TEntity, K>[]>;
  updateAll(entities: TEntity[]): Promise<TEntity[]>;
  async updateAll(entities: unknown, fields?: unknown): Promise<unknown> {
    const requestFields = this.getFields(fields);
    return await RESTApi.put(`${this.url}`, entities, {
      fields: requestFields,
    });
  }

  private getFields(fields: unknown): string[] {
    if (fields && Array.isArray(fields)) {
      return fields;
    }
    return [];
  }
}
