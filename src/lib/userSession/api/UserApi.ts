import { Repository } from "../../../api/core/Repository";
import { RESTApi } from "../../../api/core/RESTApi";
import { IAuthentication } from "../shared/model/IAuthentication";
import { ICredentials } from "../shared/model/ICredentials";
import { ISession } from "../shared/model/ISession";
import { UserRouteMeta } from "../shared/model/UserRouteMeta";

export class UserApi extends Repository<ISession> {
  constructor() {
    super(UserRouteMeta);
  }

  login(credentials: ICredentials): Promise<ISession> {
    return RESTApi.post(
      `${this.url}/login`,
      this.createAuthenticationRequest(credentials)
    );
  }

  logout(session: ISession): Promise<boolean> {
    return RESTApi.post(`${this.url}/logout`, session);
  }

  register(credentials: ICredentials): Promise<boolean> {
    return RESTApi.post(`${this.url}/register`, credentials);
  }

  private createAuthenticationRequest(
    credentials: ICredentials
  ): IAuthentication {
    return { credentials };
  }
}
