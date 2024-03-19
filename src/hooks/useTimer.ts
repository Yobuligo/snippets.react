import { useEffect, useMemo, useState } from "react";
import { OnRemainingSecondsChangeHandler } from "../core/services/timer/OnRemainingSecondsChangeHandler";
import { Timer } from "../core/services/timer/Timer";
import { VoidHandler } from "../core/types/VoidHandler";

export const useTimer = (seconds: number) => {
  const [remainingSeconds, setRemainingSeconds] = useState(seconds);
  const timer = useMemo(() => new Timer(seconds), [seconds]);

  useEffect(() => {
    return () => {
      timer.destruct();
    };
  }, [timer]);

  const isRunning = timer.isRunning;

  const isPaused = timer.isPaused;

  const onFinish = (handler: VoidHandler) => {
    return timer.onFinish(handler);
  };

  const onReset = (handler: VoidHandler) => {
    return timer.onReset(handler);
  };

  const onStart = (handler: VoidHandler) => {
    return timer.onStart(handler);
  };

  const onStop = (handler: VoidHandler) => {
    return timer.onStop(handler);
  };

  const onTick = (handler: OnRemainingSecondsChangeHandler) => {
    return timer.onTick(handler);
  };

  const reset = () => {
    timer.reset();
  };

  const start = () => {
    timer.start();
    timer.onRemainingSecondsChange((remainingSeconds) =>
      setRemainingSeconds(remainingSeconds)
    );
  };

  const stop = () => {
    timer.stop();
  };

  return {
    isRunning,
    isPaused,
    remainingSeconds,
    onFinish,
    onReset,
    onStart,
    onStop,
    onTick,
    reset,
    start,
    stop,
  };
};
