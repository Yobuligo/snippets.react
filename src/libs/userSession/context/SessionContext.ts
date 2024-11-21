import { createContext } from "react";
import { ISessionContext } from "./ISessionContext";

export const SessionContext = createContext<ISessionContext>(null!);
