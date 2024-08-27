import { useCallback, useMemo, useState } from "react";
import { IError } from "../../../core/types/IError";
import { isError } from "../../../core/utils/isError";
import { texts } from "../../translation/texts";
import { useTranslation } from "../../translation/useTranslation";
import { useErrorMessage } from "./useErrorMessage";
import { useLogout } from "./useLogout";

export const useRequest = () => {
  const [isProcessing, setIsLoading] = useState(false);
  const [, setErrorMessage] = useErrorMessage();
  const logout = useLogout();
  const { t } = useTranslation();

  const handleError = useCallback(
    (error: IError) => {
      if (
        error.type === "NoSessionError" ||
        error.type === "InvalidSessionError" ||
        error.type === "ExpiredSessionError"
      ) {
        setErrorMessage(t(texts.general.logoutInvalidSession));
        logout.logout();
        return;
      }
      setErrorMessage(error.message);
    },
    [logout, setErrorMessage, t]
  );

  const send = useCallback(
    async (
      block: () => Promise<void>,
      errorHandler?: (error: any) => string
    ) => {
      setIsLoading(true);
      setErrorMessage("");
      try {
        await block();
      } catch (error) {
        // does an error handler handles the error?
        if (errorHandler) {
          setErrorMessage(errorHandler(error));
        } else {
          if (isError(error)) {
            handleError(error);
          } else {
            setErrorMessage("Unknown error while sending REST request.");
          }
        }
      }
      setIsLoading(false);
    },
    [handleError, setErrorMessage]
  );

  const request = useMemo(() => ({ isProcessing, send }), [isProcessing, send]);

  return request;
};
