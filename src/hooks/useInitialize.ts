import { useState } from "react";

/**
 * This custom hook is responsible for calling {@link block} for the first time, when the hook is called.
 */
export const useInitialize = (block: () => void) => {
  const [needsInit, setNeedsInit] = useState(true);

  if (needsInit) {
    setNeedsInit(false);
    block();
  }
};
