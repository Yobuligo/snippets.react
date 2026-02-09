import { useContext } from "react";
import { SessionContext } from "../context/SessionContext";
import { ISession } from "../shared/model/ISession";
import { Value } from "../../core/types/Value";

export const useSession = (): Value<ISession | undefined> => {
  const context = useContext(SessionContext);
  return context.session;
};
