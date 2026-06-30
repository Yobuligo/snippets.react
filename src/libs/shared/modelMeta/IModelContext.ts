import { ModelName } from "./ModelName";

/**
 * Provides a model name with id that refers to an instance of this model.
 */
export interface IModelContext {
  id: string;
  name: ModelName;
}
