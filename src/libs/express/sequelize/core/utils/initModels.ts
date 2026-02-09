import { IHaveStaticModel } from "../types/IHaveStaticModel";
import { ISequelizeDatabase } from "../types/ISequelizeDatabase";
import { ISequelizeModelInitConfig } from "../types/ISequelizeModelInitConfig";

/**
 * Responsible for initializing the given {@link models} & associations and synchronizing it to the given {@link sequelizeDatabase}.
 * The parameter {@link modelInitConfig} can be provided to configure the initialization by activated `alert` (update tables) or `force` (recreate tables and delete content.)
 */
export const initModels = async <TSequelizeDatabase extends ISequelizeDatabase>(
  sequelizeDatabase: TSequelizeDatabase,
  models: IHaveStaticModel[],
  modelInitConfig?: ISequelizeModelInitConfig,
) => {
  // initialize models itself
  for (const propName in models) {
    const model = models[propName];
    model.initModel(sequelizeDatabase);
  }

  // initialize associations
  for (const propName in models) {
    const model = models[propName];
    model.associate(sequelizeDatabase);
  }

  // sync models
  await sequelizeDatabase.sequelize.sync({
    alter: modelInitConfig?.alter,
    force: modelInitConfig?.force,
  });
};
