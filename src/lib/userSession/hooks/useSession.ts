import { useContext } from "react";
import { Value } from "../../../core/types/Value";
import { SessionContext } from "../context/SessionContext";
import { ISession } from "../shared/model/ISession";

export const useSession = (): Value<ISession | undefined> => {
  const context = useContext(SessionContext);
  return context.session;
};
