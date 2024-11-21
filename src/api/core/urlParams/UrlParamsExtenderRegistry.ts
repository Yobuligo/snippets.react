import { IUrlParamsExtender } from "../../../libs/urlParamsExtender/IUrlParamsExtender";
import { UrlParamsExtender } from "./UrlParamsExtender";

/**
 * This list contains all UrlParamsExtenders instances that should extend REST call urls.
 */
export const UrlParamsExtenderRegistry: IUrlParamsExtender[] = [
  new UrlParamsExtender(),
];
