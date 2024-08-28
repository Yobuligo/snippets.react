import { IUrlParamsBuilder } from "./IUrlParamsBuilder";
import { IUrlParamsCollector } from "./IUrlParamsCollector";

export class UrlParamsCollector implements IUrlParamsCollector {
  constructor(private urlParamsBuilder: IUrlParamsBuilder) {}

  addParam(name: string, value: string): IUrlParamsCollector {
    this.urlParamsBuilder.addParam(name, value);
    return this;
  }
}
