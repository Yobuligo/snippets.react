/**
 * An implementation of this interface is responsible for building an url with additional parameters.
 */
export interface IUrlParamsBuilder {
  readonly url: string;
  addParam(name: string, value: string): IUrlParamsBuilder;
  build(): string;
}
