import { IUrlParamsCollector } from "../../shared/urlParamsExtender/IUrlParamsCollector";
import { IUrlParamsExtender } from "../../shared/urlParamsExtender/IUrlParamsExtender";
import { SessionTokenParamMeta } from "../shared/model/ISession";
import { SessionRepo } from "./SessionRepo";

export class UrlSessionExtender implements IUrlParamsExtender {
  extend(urlParamsCollector: IUrlParamsCollector): void {
    if (SessionRepo.instance.session) {
      urlParamsCollector.addParam(
        SessionTokenParamMeta,
        SessionRepo.instance.session.id
      );
    }
  }
}
