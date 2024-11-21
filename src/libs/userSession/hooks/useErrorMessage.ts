import { useContext } from "react";
import { Value } from "../../../core/types/Value";
import { SessionContext } from "../context/SessionContext";

export const useErrorMessage = (): Value<string> => {
  const context = useContext(SessionContext);
  return [context.errorMessage[0], context.errorMessage[1]];
};
