import { IDBModel } from "./IDBModel";

/**
 * Extracts the attributes of the sequelize model.
 */
export type ExtractModelAttr<T> =
  T extends IDBModel<infer TAttr> ? TAttr : never;
