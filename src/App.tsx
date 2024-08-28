import React, { useState } from "react";
import { AsyncLoad } from "./components/asyncLoad/AsyncLoad";
import { Tree } from "./components/tree/tree/Tree";
import { AppContext } from "./context/AppContext";
import { useLanguageStorage } from "./lib/language/useLanguageStorage";

export const App: React.FC = () => {
  const [, setWelcomeMessage] = useState("");
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
        <Tree
          rootNode={{
            caption: "Hello World",
            nodes: [{ caption: "1.0" }, { caption: "2.0" }],
          }}
        />
      </AsyncLoad>
    </AppContext.Provider>
  );
};
