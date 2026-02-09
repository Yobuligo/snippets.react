import { IEntityRepository } from "./IEntityRepository";

export type EntityRepoConstructor<
  TEntityRepository extends IEntityRepository<any>
> = new (...args: any[]) => TEntityRepository;
