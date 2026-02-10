import { BelongsToOptions, HasManyOptions, HasOneOptions } from "sequelize";
import { IDBModel } from "../../core/types/IDBModel";
import { ISequelizeModelOptions } from "./types/ISequelizeModelOptions";
import { ISequelizeRelationFactory } from "./types/ISequelizeRelationFactory";
import { IAToBConfig } from "./types/relations/IAToBConfig";
import { IOneToManyRelation } from "./types/relations/IOneToManyRelation";
import { IOneToOneRelation } from "./types/relations/IOneToOneRelation";

export class SequelizeRelationFactory implements ISequelizeRelationFactory {
  addManyToManyRelations(
    sequelizeModelOptions: ISequelizeModelOptions,
    newModel: IDBModel<any, any>,
  ) {
    sequelizeModelOptions.manyToManyRelations.forEach((manyToManyRelation) => {
      manyToManyRelation.modelA.belongsToMany(manyToManyRelation.modelB, {
        as: manyToManyRelation.fillTargetProp?.toString(),
        through: newModel,
        timestamps: manyToManyRelation.timestamps,
      });

      manyToManyRelation.modelB.belongsToMany(manyToManyRelation.modelA, {
        as: manyToManyRelation.fillSourceProp?.toString(),
        through: newModel,
        timestamps: manyToManyRelation.timestamps,
      });
    });
  }

  addOneToManyRelations(
    sequelizeModelOptions: ISequelizeModelOptions,
    newModel: IDBModel<any, any>,
  ) {
    sequelizeModelOptions.oneToManyRelations.forEach((oneToManyRelation) => {
      const belongsToOptions = this.createBelongsToOptions(oneToManyRelation);
      const hasManyOptions = this.createHasManyOptions(oneToManyRelation);

      oneToManyRelation.model.belongsTo(newModel, belongsToOptions);
      newModel.hasMany(oneToManyRelation.model, hasManyOptions);
    });
  }

  addOneToOneRelations(
    sequelizeModelOptions: ISequelizeModelOptions,
    newModel: IDBModel<any, any>,
  ) {
    sequelizeModelOptions.oneToOneRelations.forEach((oneToOneRelation) => {
      const belongsToOptions = this.createBelongsToOptions(oneToOneRelation);
      const hasManyOptions = this.createHasOneOptions(oneToOneRelation);

      oneToOneRelation.model.belongsTo(newModel, belongsToOptions);
      newModel.hasOne(oneToOneRelation.model, hasManyOptions);
    });
  }

  addSelfOneToManyRelations(
    sequelizeModelOptions: ISequelizeModelOptions,
    newModel: IDBModel<any, any>,
  ) {
    sequelizeModelOptions.selfOneToManyRelations.forEach(
      (selfOneToManyRelation) => {
        const foreignKey = selfOneToManyRelation.foreignKey.toString();
        const fillSourceProp = selfOneToManyRelation.fillSourceProp.toString();
        const fillTargetProp = selfOneToManyRelation.fillTargetProp.toString();
        const onDelete =
          selfOneToManyRelation?.deleteCascade === true ? "CASCADE" : undefined;

        newModel.belongsTo(newModel, {
          as: fillTargetProp,
          foreignKey,
          onDelete,
        });

        newModel.hasMany(newModel, {
          as: fillSourceProp,
          foreignKey,
        });
      },
    );
  }

  addSelfOneToOneRelations(
    sequelizeModelOptions: ISequelizeModelOptions,
    newModel: IDBModel<any, any>,
  ) {
    sequelizeModelOptions.selfOneToOneRelations.forEach(
      (selfOneToOneRelation) => {
        const foreignKey = selfOneToOneRelation.foreignKey.toString();
        const fillSourceProp = selfOneToOneRelation.fillSourceProp.toString();
        const fillTargetProp = selfOneToOneRelation.fillTargetProp.toString();
        const onDelete =
          selfOneToOneRelation?.deleteCascade === true ? "CASCADE" : undefined;

        newModel.belongsTo(newModel, {
          as: fillSourceProp,
          foreignKey,
          onDelete,
        });

        newModel.hasOne(newModel, {
          as: fillTargetProp,
          foreignKey,
        });
      },
    );
  }

  private createBelongsToOptions(
    aToBConfig?: IAToBConfig<any, any>,
  ): BelongsToOptions {
    return {
      as: aToBConfig?.fillTargetProp?.toString(),
      onDelete: aToBConfig?.deleteCascade === true ? "CASCADE" : undefined,
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
