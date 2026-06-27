import { ModelMetaConfig } from "./ModelMetaConfig";

const configure = <R extends ModelMetaConfig>(config: R): R => {
  return config;
};

/**
 * Provides access to the model meta of registered models.
 */
export const ModelInfo = configure({
  // TODO: Define models
});
