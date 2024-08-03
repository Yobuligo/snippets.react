import { useState } from "react";
import { ISignal } from "../core/services/signal/ISignal";
import { Signal } from "../core/services/signal/Signal";

export const useSignal = (): [
  signal: ISignal | undefined,
  triggerSignal: () => void
] => {
  const [signal, setSignal] = useState<ISignal | undefined>(undefined);
  const triggerSignal = () => setSignal(new Signal());
  return [signal, triggerSignal];
};
