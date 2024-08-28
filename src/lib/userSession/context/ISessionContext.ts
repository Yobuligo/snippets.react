import { Value } from "../../../core/types/Value";
import { ISession } from "../shared/model/ISession";

export interface ISessionContext {
  /**
   * This value can be used to display error messages
   */
  errorMessage: Value<string>;

  /**
   * This value represents a specific user session, which can be loaded e.g. via useSessionStorage
   */
  session: Value<ISession | undefined>;
}
