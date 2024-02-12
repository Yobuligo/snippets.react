import React, { useState } from "react";
import { AsyncLoad } from "./components/asyncLoad/AsyncLoad";

export const App: React.FC = () => {
  const [welcomeMessage, setWelcomeMessage] = useState("");
  return (
    <AsyncLoad
      spinnerColor="black"
      load={async () => {
        const welcomeMessage = await new Promise<string>((resolve) => {
          setTimeout(() => {
            resolve("Hello World");
          }, 5000);
        });
        setWelcomeMessage(welcomeMessage);
      }}
    >
      Hello World
    </AsyncLoad>
  );
};
