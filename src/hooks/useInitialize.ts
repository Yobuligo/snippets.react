import { useState } from "react";

export const useInitialize = (block: () => void) => {
  const [needsInit, setNeedsInit] = useState(true);

  if (needsInit) {
    setNeedsInit(false);
    block();
  }
};
