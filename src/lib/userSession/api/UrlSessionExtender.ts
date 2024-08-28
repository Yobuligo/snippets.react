import { IUrlParamsCollector } from "../../urlParamsExtender/IUrlParamsCollector";
import { IUrlParamsExtender } from "../../urlParamsExtender/IUrlParamsExtender";
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
