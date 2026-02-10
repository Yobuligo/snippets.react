import { ISelfOneToManyConfig } from "./ISelfOneToManyConfig";

/**
 * Represents the whole config to set up a self one to many relation.
 */
export interface ISelfOneToManyRelation<
  TSource extends object,
> extends ISelfOneToManyConfig<TSource> {
  /**
   * Contains the source Sequelize model foreign key of this recursive relation.
   */
  readonly foreignKey: keyof TSource;
}
