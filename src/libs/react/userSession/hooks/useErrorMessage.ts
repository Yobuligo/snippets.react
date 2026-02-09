import { useContext } from "react";
import { SessionContext } from "../context/SessionContext";
import { Value } from "../../core/types/Value";

export const useErrorMessage = (): Value<string> => {
  const context = useContext(SessionContext);
  return [context.errorMessage[0], context.errorMessage[1]];
};
