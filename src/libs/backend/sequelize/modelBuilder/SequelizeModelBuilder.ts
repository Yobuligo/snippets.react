import { Model, ModelIndexesOptions, ModelStatic, Sequelize } from "sequelize";
import { IDBModel } from "../core/types/IDBModel";
import { ISequelizeDatabase } from "../core/types/ISequelizeDatabase";
import { SequelizeModelFactory } from "./services/SequelizeModelFactory";
import { ISequelizeModelBuilder } from "./services/types/ISequelizeModelBuilder";
import { ISequelizeModelDef } from "./services/types/ISequelizeModelDef";
import { ISequelizeModelKeys } from "./services/types/ISequelizeModelKeys";
import { ISequelizeModelOptions } from "./services/types/ISequelizeModelOptions";
import { IManyToManyConfig } from "./services/types/relations/IManyToManyConfig";
import { IManyToManyRelation } from "./services/types/relations/IManyToManyRelation";
import { IOneToManyConfig } from "./services/types/relations/IOneToManyConfig";
import { IOneToManyRelation } from "./services/types/relations/IOneToManyRelation";
import { IOneToOneConfig } from "./services/types/relations/IOneToOneConfig";
import { IOneToOneRelation } from "./services/types/relations/IOneToOneRelation";
import { ISelfOneToManyConfig } from "./services/types/relations/ISelfOneToManyConfig";
import { ISelfOneToManyRelation } from "./services/types/relations/ISelfOneToManyRelation";
import { ISelfOneToOneRelation } from "./services/types/relations/ISelfOneToOneRelation";

/**
 * Responsible for building a Sequelize model for the given {@link TSource}.
 */
export class SequelizeModelBuilder<
  TSource extends object,
  TSequelizeDatabase extends ISequelizeDatabase = { sequelize: Sequelize },
> implements ISequelizeModelBuilder<TSource> {
  private indexes: ModelIndexesOptions[] = [];
  private manyToManyRelations: IManyToManyRelation<any, any>[] = [];
  private oneToManyRelations: IOneToManyRelation<any, any>[] = [];
  private oneToOneRelations: IOneToOneRelation<any, any>[] = [];
  private selfOneToManyRelations: ISelfOneToManyRelation<TSource>[] = [];
  private selfOneToOneRelations: ISelfOneToOneRelation<TSource>[] = [];
  private excludedColumnsOnDefaultLoad = new Set<string>();

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

  build(): IDBModel<TSource, TSource> & ISequelizeModelKeys<TSource> {
    const sequelizeModelOptions = this.createSequelizeModelOptions();
    return new SequelizeModelFactory<TSequelizeDatabase, TSource>().create(
      sequelizeModelOptions,
    );
  }

  excludeOnDefaultLoad(
    ...columns: (keyof TSource)[]
  ): ISequelizeModelBuilder<TSource> {
    columns.forEach((column) =>
      this.excludedColumnsOnDefaultLoad.add(column.toString()),
    );
    return this;
  }

  manyToMany<TModelA extends object, TModelB extends object>(
    modelA: ModelStatic<Model<TModelA, TModelA>>,
    modelB: ModelStatic<Model<TModelB, TModelB>>,
    config?: IManyToManyConfig<TModelA, TModelB>,
  ): ISequelizeModelBuilder<TSource> {
    this.manyToManyRelations.push({
      modelA,
      modelB,
      ...config,
    });
    return this;
  }

  hasMany<TTarget extends object>(
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

  hasOne<TTarget extends object>(
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

  selfHasMany(
    foreignKey: keyof TSource,
    config: ISelfOneToManyConfig<TSource>,
  ): ISequelizeModelBuilder<TSource> {
    this.selfOneToManyRelations.push({
      foreignKey,
      ...config,
    });
    return this;
  }

  selfHasOne(
    foreignKey: keyof TSource,
    config: ISelfOneToManyConfig<TSource>,
  ): ISequelizeModelBuilder<TSource> {
    this.selfOneToOneRelations.push({
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
      selfOneToManyRelations: this.selfOneToManyRelations,
      selfOneToOneRelations: this.selfOneToOneRelations,
      excludedColumnsOnDefaultLoad: this.excludedColumnsOnDefaultLoad,
    };
  }
}
