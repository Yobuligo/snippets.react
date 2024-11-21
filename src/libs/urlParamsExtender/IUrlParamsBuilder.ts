import { RequestParams } from "../../api/core/RequestParams";

/**
 * An implementation of this interface is responsible for building an url with additional parameters.
 */
export interface IUrlParamsBuilder {
  readonly url: string;
  readonly requestParams?: RequestParams<any>;
  addParam(name: string, value: string): IUrlParamsBuilder;
  build(): string;
}
