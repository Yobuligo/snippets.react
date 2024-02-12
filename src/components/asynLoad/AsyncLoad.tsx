import { useState } from "react";
import { useInitialize } from "../../hooks/useInitialize";
import { Spinner } from "../spinner/Spinner";
import { IAsyncLoadProps } from "./IAsyncLoadProps";

export const AsyncLoad: React.FC<IAsyncLoadProps> = (props) => {
  const [needsLoad, setNeedsLoad] = useState(true);

  useInitialize(async () => {
    await props.load();
    setNeedsLoad(false);
  });

  return <>{needsLoad ? <Spinner /> : props.children}</>;
};
