import { IModelMeta } from "../../shared/modelMeta/IModelMeta";
import { IHavePath } from "./IHavePath";

/**
 * This type represents an object that provides meta information for a route.
 */
export interface IRouteMeta extends IModelMeta, IHavePath {}
