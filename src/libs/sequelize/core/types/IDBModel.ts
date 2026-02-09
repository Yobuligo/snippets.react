import { Model, ModelStatic } from "sequelize";
import { IHaveStaticModel } from "./IHaveStaticModel";

/**
 * Represents a general sequelize database model. Also provides methods for initializing the model and associations.
 */
export type IDBModel<
  TModelAttributes extends {} = any,
  TModelCreation extends {} = TModelAttributes,
> = ModelStatic<Model<TModelAttributes, TModelCreation>> & IHaveStaticModel;
