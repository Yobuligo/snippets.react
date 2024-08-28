import { IUrlParamsCollector } from "../../lib/urlParamsExtender/IUrlParamsCollector";
import { IUrlParamsExtender } from "../../lib/urlParamsExtender/IUrlParamsExtender";

/**
 * This class is responsible for adding url parameters and fields from the requests params to an url.
 */
export class UrlParamsExtender implements IUrlParamsExtender {
  extend(urlParamsCollector: IUrlParamsCollector): void {
    this.appendUrlParams(urlParamsCollector);
    this.appendFields(urlParamsCollector);
  }

  private appendUrlParams(urlParamsCollector: IUrlParamsCollector) {
    const urlParams = urlParamsCollector.requestParams?.urlParams;
    if (!urlParams) {
      return;
    }

    for (const propName in urlParams) {
      const propValue = urlParams[propName];
      urlParamsCollector.addParam(propName, propValue);
    }
  }

  private appendFields(urlParamsCollector: IUrlParamsCollector) {
    const fields = urlParamsCollector.requestParams?.fields;
    if (!fields) {
      return;
    }

    const fieldString = fields.join(",");
    urlParamsCollector.addParam("fields", fieldString);
  }
}
