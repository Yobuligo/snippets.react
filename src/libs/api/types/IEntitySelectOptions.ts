import { IEntity } from "./IEntity";
import { OrderBy } from "./OrderBy";

export interface IEntitySelectOptions<
  TEntity extends IEntity,
  K extends keyof TEntity | object = {}
> {
  /**
   * Restricts the result to the given fields.
   */
  fields?: readonly K[];

  /**
   * Orders the selected data by the given orders.
   *
   * @example
   *   orderBy: [
   *     ["lastname", SortOrder.ASC],
   *     ["firstname", SortOrder.ASC],
   *   ]
   */
  orderBy?: OrderBy<TEntity>[];
}
