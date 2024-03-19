import { useEffect, useMemo, useState } from "react";
import { OnFinishHandler } from "../core/services/timer/OnFinishHandler";
import { OnRemainingSecondsChangeHandler } from "../core/services/timer/OnRemainingSecondsChangeHandler";
import { Timer } from "../core/services/timer/Timer";

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

  const onFinish = (handler: OnFinishHandler) => {
    return timer.onFinish(handler);
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
    remainingSeconds,
    isRunning,
    isPaused,
    onFinish,
    onTick,
    reset,
    start,
    stop,
  };
};
