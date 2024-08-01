import { useState } from "react";
import { ISignal } from "../services/signal/ISignal";
import { Signal } from "../services/signal/Signal";

export const useSignal = () => {
  const [signal, setSignal] = useState<ISignal | undefined>(undefined);

  const triggerSignal = () => setSignal(new Signal());

  return [signal, triggerSignal];
};
