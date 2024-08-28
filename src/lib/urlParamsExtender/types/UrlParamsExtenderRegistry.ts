import { Constructor } from "../../../core/types/Constructor";
import { IUrlParamsExtender } from "../IUrlParamsExtender";

/**
 * This type represents a list of constructors to create {@link IUrlParamsExtender}s.
 */
export type UrlParamsExtenderConstructors = Constructor<IUrlParamsExtender>[];
