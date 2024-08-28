import { RequestParams } from "../../api/core/RequestParams";

/**
 * An implementation of this interface is responsible for collecting a set of Url parameters.
 */
export interface IUrlParamsCollector {
  readonly url: string;
  readonly requestParams?: RequestParams<any>;
  addParam(name: string, value: string): IUrlParamsCollector;
}
