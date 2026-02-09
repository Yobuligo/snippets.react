import {
  BelongsToOptions,
  FindAttributeOptions,
  FindOptions,
  HasManyOptions,
  HasOneOptions,
  Model,
} from "sequelize";
import { IDBModel } from "../../core/types/IDBModel";
import { ISequelizeDatabase } from "../../core/types/ISequelizeDatabase";
import { ISequelizeModelFactory } from "./types/ISequelizeModelFactory";
import { ISequelizeModelKeys } from "./types/ISequelizeModelKeys";
import { ISequelizeModelOptions } from "./types/ISequelizeModelOptions";
import { IOneToManyRelation } from "./types/relations/IOneToManyRelation";
import { IOneToOneRelation } from "./types/relations/IOneToOneRelation";
import { IOneToXConfig } from "./types/relations/IOneToXConfig";
import { SequelizeModelKeys } from "./types/SequelizeModelKeys";

/**
 * Responsible for creating a Sequelize model.
 */
export class SequelizeModelFactory<
  TSequelizeDatabase extends ISequelizeDatabase,
  TSource extends object,
> implements ISequelizeModelFactory<TSource> {
  create(
    sequelizeModelOptions: ISequelizeModelOptions,
  ): IDBModel<any, any> & ISequelizeModelKeys<TSource> {
    const createBelongsToOptions = this.createBelongsToOptions;
    const createHasManyOptions = this.createHasManyOptions;
    const createHasOneOptions = this.createHasOneOptions;
    const defaultScope = this.createDefaultScope(sequelizeModelOptions);

    return class NewModel extends Model<any> {
      private static _keys: SequelizeModelKeys<TSource>;

      static initModel(sequelizeDatabase: TSequelizeDatabase) {
        super.init(sequelizeModelOptions.columns as any, {
          indexes: sequelizeModelOptions.indexes,
          defaultScope,
          modelName: sequelizeModelOptions.tableName,
          sequelize: sequelizeDatabase.sequelize,
          tableName: sequelizeModelOptions.tableName,
          timestamps: sequelizeModelOptions.timestamps,
        });
      }

      /**
       * Provides an object containing all columns of this model.
       */
      static get keys() {
        if (!this._keys) {
          const keys = {} as any;

          const attributes = NewModel.getAttributes();
          for (const propName in attributes) {
            keys[propName] = propName;
          }

          this._keys = keys;
        }

        return this._keys;
      }

      static associate() {
        sequelizeModelOptions.manyToManyRelations.forEach(
          (manyToManyRelation) => {
            manyToManyRelation.model.belongsToMany(NewModel, {
              through: manyToManyRelation.tableName,
              timestamps: manyToManyRelation.timestamps,
            });

            NewModel.belongsToMany(manyToManyRelation.model, {
              through: manyToManyRelation.tableName,
              timestamps: manyToManyRelation.timestamps,
            });
          },
        );

        sequelizeModelOptions.oneToManyRelations.forEach(
          (oneToManyRelation) => {
            const belongsToOptions = createBelongsToOptions(oneToManyRelation);
            const hasManyOptions = createHasManyOptions(oneToManyRelation);

            oneToManyRelation.model.belongsTo(NewModel, belongsToOptions);
            NewModel.hasMany(oneToManyRelation.model, hasManyOptions);
          },
        );

        sequelizeModelOptions.oneToOneRelations.forEach((oneToOneRelation) => {
          const belongsToOptions = createBelongsToOptions(oneToOneRelation);
          const hasManyOptions = createHasOneOptions(oneToOneRelation);

          oneToOneRelation.model.belongsTo(NewModel, belongsToOptions);
          NewModel.hasOne(oneToOneRelation.model, hasManyOptions);
        });
      }
    };
  }

  private createBelongsToOptions(
    oneToXConfig?: IOneToXConfig<any, any>,
  ): BelongsToOptions {
    return {
      as: oneToXConfig?.fillTargetProp?.toString(),
      onDelete: oneToXConfig?.deleteCascade === true ? "CASCADE" : undefined,
    };
  }

  private createHasManyOptions(
    oneToManyRelation: IOneToManyRelation<any, any>,
  ): HasManyOptions {
    return {
      foreignKey: oneToManyRelation.foreignKey.toString(),
      as: oneToManyRelation.fillSourceProp?.toString(),
    };
  }

  private createHasOneOptions(
    oneToOneRelation: IOneToOneRelation<any, any>,
  ): HasOneOptions {
    return {
      foreignKey: oneToOneRelation.foreignKey.toString(),
      as: oneToOneRelation.fillSourceProp?.toString(),
    };
  }

  private createDefaultScope(
    sequelizeModelOptions: ISequelizeModelOptions,
  ): FindOptions<any> | undefined {
    if (sequelizeModelOptions.excludedColumnsOnDefaultLoad.size === 0) return;

    const attributes: FindAttributeOptions = {
      exclude: Array.from(sequelizeModelOptions.excludedColumnsOnDefaultLoad),
    };

    const defaultScope: FindOptions<any> = {
      attributes,
    };

    return defaultScope;
  }
}
