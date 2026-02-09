import { IRequiresBootstrap } from "../../types/IRequiresBootstrap";
import { IEntity } from "./IEntity";
import { IEntityRepository } from "./IEntityRepository";

export interface IEntitySingletonRepository<TEntity extends IEntity>
  extends IEntityRepository<TEntity>, IRequiresBootstrap {
  /**
   * Returns the singleton entity.
   */
  getOrCreate(): Promise<TEntity>;
}
