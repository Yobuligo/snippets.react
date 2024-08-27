import { Repository } from "./Repository";
import { IEntity } from "../../core/api/types/IEntity";

export abstract class EntityRepository<
  TEntity extends IEntity
> extends Repository<TEntity> {
  async delete(entity: TEntity): Promise<boolean> {
    return await this.deleteById(entity.id);
  }
}
