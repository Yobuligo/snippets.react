/**
 * An implementation of this interface is responsible for building an url with additional parameters.
 */
export interface IUrlParamsBuilder {
  addParam(name: string, value: string): IUrlParamsBuilder;
  build(): string;
}
