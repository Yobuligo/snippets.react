/**
 * An implementation of this interface is responsible for collecting a set of Url parameters.
 */
export interface IUrlParamsCollector {
  readonly url: string;
  addParam(name: string, value: string): IUrlParamsCollector;
}
