import { Repository } from "../../../api/core/Repository";
import { IAuthentication } from "../shared/model/IAuthentication";
import { ICredentials } from "../shared/model/ICredentials";
import { ISession } from "../shared/model/ISession";
import { UserRouteMeta } from "../shared/model/UserMeta";

export class UserApi extends Repository<any> {
  constructor() {
    super(UserRouteMeta);
  }

  login(credentials: ICredentials): Promise<ISession> {
    return this.requestPost(
      `${this.url}/login`,
      this.createAuthenticationRequest(credentials)
    );
  }

  logout(session: ISession): Promise<boolean> {
    return this.requestPost(`${this.url}/logout`, session);
  }

  register(credentials: ICredentials): Promise<boolean> {
    return this.requestPost(`${this.url}/register`, credentials);
  }

  private createAuthenticationRequest(
    credentials: ICredentials
  ): IAuthentication {
    return { credentials };
  }
}
