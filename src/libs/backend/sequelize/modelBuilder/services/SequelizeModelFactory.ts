import { FindAttributeOptions, FindOptions, Model } from "sequelize";
import { IDBModel } from "../../core/types/IDBModel";
import { ISequelizeDatabase } from "../../core/types/ISequelizeDatabase";
import { SequelizeRelationFactory } from "./SequelizeRelationFactory";
import { ISequelizeModelFactory } from "./types/ISequelizeModelFactory";
import { ISequelizeModelKeys } from "./types/ISequelizeModelKeys";
import { ISequelizeModelOptions } from "./types/ISequelizeModelOptions";

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
    const sequelizeRelationFactory = new SequelizeRelationFactory();
    const defaultScope = this.createDefaultScope(sequelizeModelOptions);

    return class NewModel extends Model<any> {
      private static _needsSetUpKeys = true;
      private static _keys = {} as any;
      private static _keyList: (keyof TSource)[] | undefined = undefined;

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
       * Returns an object containing the given model keys as name and value.
       */
      static get keys() {
        if (this._needsSetUpKeys) {
          this._needsSetUpKeys = false;

          for (const propName in NewModel.getAttributes()) {
            this._keys[propName] = propName;
          }

          for (const propName in NewModel.associations) {
            this._keys[propName] = propName;
          }
        }

        return this._keys;
      }

      static get keyList(): (keyof TSource)[] {
        if (!this._keyList) {
          this._keyList = [];
          for (const propName in this.keys) {
            this._keyList.push(propName as keyof TSource);
          }
        }
        return this._keyList;
      }

      static associate() {
        sequelizeRelationFactory.addManyToManyRelations(
          sequelizeModelOptions,
          NewModel,
        );
        sequelizeRelationFactory.addOneToManyRelations(
          sequelizeModelOptions,
          NewModel,
        );
        sequelizeRelationFactory.addOneToOneRelations(
          sequelizeModelOptions,
          NewModel,
        );
        sequelizeRelationFactory.addSelfOneToManyRelations(
          sequelizeModelOptions,
          NewModel,
        );
        sequelizeRelationFactory.addSelfOneToOneRelations(
          sequelizeModelOptions,
          NewModel,
        );
      }
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
