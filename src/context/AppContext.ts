import { createContext } from "react";
import { IAppContext } from "./IAppContext";

export const AppContext = createContext<IAppContext>(undefined!);
