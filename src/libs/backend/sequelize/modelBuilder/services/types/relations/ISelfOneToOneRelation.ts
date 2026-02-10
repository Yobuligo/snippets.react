import { ISelfOneToOneConfig } from "./ISelfOneToOneConfig";

/**
 * Represents the whole config to set up a self one to one relation.
 */
export interface ISelfOneToOneRelation<
  TSource extends object,
> extends ISelfOneToOneConfig<TSource> {
  /**
   * Contains the source Sequelize model foreign key of this recursive relation.
   */
  readonly foreignKey: keyof TSource;
}
