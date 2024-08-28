import { IUrlParamsCollector } from "../../lib/urlParamsExtender/IUrlParamsCollector";
import { IUrlParamsExtender } from "../../lib/urlParamsExtender/IUrlParamsExtender";

/**
 * This class is responsible for adding url parameters from the requests params to an url.
 */
export class UrlParamsExtender implements IUrlParamsExtender {
  extend(urlParamsCollector: IUrlParamsCollector): void {
    const urlParams = urlParamsCollector.requestParams?.urlParams;
    if (!urlParams) {
      return;
    }

    for (const propName in urlParams) {
      const propValue = urlParams[propName];
      urlParamsCollector.addParam(propName, propValue);
    }
  }
}
