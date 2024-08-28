import { IUrlParamsCollector } from "./IUrlParamsCollector";

export interface IUrlParamsExtender {
  extend(urlParamsCollector: IUrlParamsCollector): void;
}
