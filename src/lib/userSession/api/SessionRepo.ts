import { ISession } from "../shared/model/ISession";

export class SessionRepo {
  private static _instance?: SessionRepo = undefined;
  private _session: ISession | undefined = undefined;

  private constructor() {}

  static get instance(): SessionRepo {
    if (!this._instance) {
      this._instance = new SessionRepo();
    }
    return this._instance;
  }

  get session(): ISession | undefined {
    return this._session;
  }

  setSession(session: ISession | undefined) {
    this._session = session;
  }
}
