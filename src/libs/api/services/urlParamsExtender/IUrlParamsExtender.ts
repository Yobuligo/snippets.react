import { IUrlParamsCollector } from "./IUrlParamsCollector";

/**
 * An implementation of this interface provides additional params to extend an URL.
 */
export interface IUrlParamsExtender {
  extend(urlParamsCollector: IUrlParamsCollector): void;
}
