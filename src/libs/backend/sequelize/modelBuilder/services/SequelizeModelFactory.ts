import {
  BelongsToOptions,
  HasManyOptions,
  HasOneOptions,
  Model,
} from "sequelize";
import { IDBModel } from "../../core/types/IDBModel";
import { ISequelizeDatabase } from "../../core/types/ISequelizeDatabase";
import { ISequelizeModelFactory } from "./types/ISequelizeModelFactory";
import { ISequelizeModelOptions } from "./types/ISequelizeModelOptions";
import { IOneToManyRelation } from "./types/relations/IOneToManyRelation";
import { IOneToOneRelation } from "./types/relations/IOneToOneRelation";
import { IOneToXConfig } from "./types/relations/IOneToXConfig";

/**
 * Responsible for creating a Sequelize model.
 */
export class SequelizeModelFactory<
  TSequelizeDatabase extends ISequelizeDatabase,
> implements ISequelizeModelFactory {
  create(sequelizeModelOptions: ISequelizeModelOptions): IDBModel<any, any> {
    const createBelongsToOptions = this.createBelongsToOptions;
    const createHasManyOptions = this.createHasManyOptions;
    const createHasOneOptions = this.createHasOneOptions;

    return class NewModel extends Model<any> {
      static initModel(sequelizeDatabase: TSequelizeDatabase) {
        super.init(sequelizeModelOptions.columns as any, {
          indexes: sequelizeModelOptions.indexes,
          modelName: sequelizeModelOptions.tableName,
          sequelize: sequelizeDatabase.sequelize,
          tableName: sequelizeModelOptions.tableName,
          timestamps: sequelizeModelOptions.timestamps,
        });
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
}
