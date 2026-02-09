import { Model, ModelIndexesOptions, ModelStatic, Sequelize } from "sequelize";
import { IDBModel } from "../core/types/IDBModel";
import { ISequelizeDatabase } from "../core/types/ISequelizeDatabase";
import { SequelizeModelFactory } from "./services/SequelizeModelFactory";
import { ISequelizeModelBuilder } from "./services/types/ISequelizeModelBuilder";
import { ISequelizeModelDef } from "./services/types/ISequelizeModelDef";
import { ISequelizeModelOptions } from "./services/types/ISequelizeModelOptions";
import { IManyToManyConfig } from "./services/types/relations/IManyToManyConfig";
import { IManyToManyRelation } from "./services/types/relations/IManyToManyRelation";
import { IOneToManyConfig } from "./services/types/relations/IOneToManyConfig";
import { IOneToManyRelation } from "./services/types/relations/IOneToManyRelation";
import { IOneToOneConfig } from "./services/types/relations/IOneToOneConfig";
import { IOneToOneRelation } from "./services/types/relations/IOneToOneRelation";

/**
 * Responsible for building a Sequelize model for the given {@link TSource}.
 */
export class SequelizeModelBuilder<
  TSource extends object,
  TSequelizeDatabase extends ISequelizeDatabase = { sequelize: Sequelize },
> implements ISequelizeModelBuilder<TSource> {
  private indexes: ModelIndexesOptions[] = [];
  private manyToManyRelations: IManyToManyRelation<any>[] = [];
  private oneToManyRelations: IOneToManyRelation<any, any>[] = [];
  private oneToOneRelations: IOneToOneRelation<any, any>[] = [];

  constructor(
    private readonly sequelizeModelDef: ISequelizeModelDef<TSource>,
  ) {}

  addIndex(
    name: string,
    columns: (keyof TSource)[],
    unique?: boolean,
  ): ISequelizeModelBuilder<TSource> {
    this.indexes.push({
      name,
      fields: columns.map((field) => field.toString()),
      unique,
    });

    return this;
  }

  build(): IDBModel<TSource, TSource> {
    const sequelizeModelOptions = this.createSequelizeModelOptions();
    return new SequelizeModelFactory<TSequelizeDatabase>().create(
      sequelizeModelOptions,
    );
  }

  manyToMany<TTarget extends object>(
    model: ModelStatic<Model<TTarget, TTarget>>,
    tableName: string,
    config?: IManyToManyConfig,
  ): ISequelizeModelBuilder<TSource> {
    this.manyToManyRelations.push({
      model,
      tableName,
      ...config,
    });
    return this;
  }

  oneToMany<TTarget extends object>(
    model: ModelStatic<Model<TTarget, TTarget>>,
    foreignKey: keyof TTarget,
    config?: IOneToManyConfig<TSource, TTarget> | undefined,
  ): ISequelizeModelBuilder<TSource> {
    this.oneToManyRelations.push({
      model,
      foreignKey,
      ...config,
    });
    return this;
  }

  oneToOne<TTarget extends object>(
    model: ModelStatic<Model<TTarget, TTarget>>,
    foreignKey: keyof TTarget,
    config?: IOneToOneConfig<TSource, TTarget> | undefined,
  ): ISequelizeModelBuilder<TSource> {
    this.oneToOneRelations.push({
      model,
      foreignKey,
      ...config,
    });
    return this;
  }

  private createSequelizeModelOptions(): ISequelizeModelOptions {
    return {
      ...this.sequelizeModelDef,
      indexes: this.indexes,
      manyToManyRelations: this.manyToManyRelations,
      oneToManyRelations: this.oneToManyRelations,
      oneToOneRelations: this.oneToOneRelations,
    };
  }
}
