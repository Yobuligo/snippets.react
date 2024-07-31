import React, { useState } from "react";
import { AsyncLoad } from "./components/asyncLoad/AsyncLoad";
import { AppContext } from "./context/AppContext";
import { useLanguageStorage } from "./hooks/useLanguage/useLanguageStorage";

export const App: React.FC = () => {
  const [welcomeMessage, setWelcomeMessage] = useState("");
  return (
    <AppContext.Provider
      value={{
        language: useLanguageStorage(),
      }}
    >
      <AsyncLoad
        spinnerColor="black"
        load={async () => {
          const welcomeMessage = await new Promise<string>((resolve) => {
            setTimeout(() => {
              resolve("Hello World");
            }, 1000);
          });
          setWelcomeMessage(welcomeMessage);
        }}
      >
        Hello World
      </AsyncLoad>
    </AppContext.Provider>
  );
};
