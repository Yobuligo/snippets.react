import { RequestParams } from "../../api/core/RequestParams";
import { isInitial } from "../../core/utils/isInitial";
import { IUrlParamsBuilder } from "./IUrlParamsBuilder";
import { IUrlParamsCollector } from "./IUrlParamsCollector";
import { IUrlParamsExtender } from "./IUrlParamsExtender";

export class UrlParamsBuilder implements IUrlParamsBuilder {
  private params: Map<string, string> = new Map();

  constructor(
    readonly url: string,
    private urlParamsExtenders: IUrlParamsExtender[],
    readonly requestParams?: RequestParams<any>
  ) {}

  addParam(name: string, value: string): IUrlParamsBuilder {
    if (this.containsParam(name)) {
      throw new Error(
        `Error when adding URL parameter '${name}'. Parameter is already defined.`
      );
    }
    this.params.set(name, value);
    return this;
  }

  build(): string {
    this.collectParams();
    return this.appendParams();
  }

  private collectParams() {
    // Inject urlParamsCollector to extender, instead of the builder
    // to avoid that extender can call build method
    const urlParamsCollector = new UrlParamsCollector(this);
    this.urlParamsExtenders.forEach((urlParameterExtender) => {
      urlParameterExtender.extend(urlParamsCollector);
    });
  }

  private appendParams(): string {
    if (this.hasParams()) {
      let extension = "";
      this.params.forEach((value, name) => {
        if (isInitial(extension)) {
          extension += `${name}=${value}`;
        } else {
          extension += `&${name}=${value}`;
        }
      });
      return `${this.url}?${extension}`;
    }

    return this.url;
  }

  private containsParam(name: string): boolean {
    return this.params.get(name) !== undefined;
  }

  private hasParams(): boolean {
    return this.params.size > 0;
  }
}

class UrlParamsCollector implements IUrlParamsCollector {
  constructor(private urlParamsBuilder: IUrlParamsBuilder) {}

  get url(): string {
    return this.urlParamsBuilder.url;
  }

  get requestParams(): RequestParams<any> | undefined {
    return this.urlParamsBuilder.requestParams;
  }

  addParam(name: string, value: string): IUrlParamsCollector {
    this.urlParamsBuilder.addParam(name, value);
    return this;
  }
}
