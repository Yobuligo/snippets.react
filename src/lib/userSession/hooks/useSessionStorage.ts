import { useEffect } from "react";
import { Value } from "../../../core/types/Value";
import { useInitialize } from "../../../hooks/useInitialize";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { SessionRepo } from "../api/SessionRepo";
import { ISession } from "../shared/model/ISession";

export const useSessionStorage = (): Value<ISession | undefined> => {
  const session = useLocalStorage<ISession | undefined>(
    "freelance.session",
    undefined
  );

  useInitialize(() => {
    SessionRepo.instance.setSession(session[0]);
  });

  useEffect(() => {
    SessionRepo.instance.setSession(session[0]);
  }, [session]);

  return session;
};
