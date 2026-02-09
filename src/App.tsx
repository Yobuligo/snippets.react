import React from "react";
import { AppContext } from "./libs/react/context/AppContext";
import { useLanguageStorage } from "./libs/react/language/useLanguageStorage";

export const App: React.FC = () => {
  return (
    <AppContext.Provider
      value={{
        language: useLanguageStorage(),
      }}
    >
      Hello World
    </AppContext.Provider>
  );
};
