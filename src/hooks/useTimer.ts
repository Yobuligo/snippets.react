import { useMemo, useState } from "react";
import { ITimer } from "./ITimer";
import { OnFinishHandler } from "./OnFinishHandler";
import { OnTickHandler } from "./OnTickHandler";

interface ITimerState {
  /**
   * Returns if the timer is currently running
   */
  isRunning: boolean;

  /**
   * Returns if the timer was already started. Even so it is currently paused, it was started before.
   */
  started: boolean;
}

export const useTimer = (seconds: number): ITimer => {
  const [remainingSeconds, setRemainingSeconds] = useState(seconds);

  const onFinishHandlers: OnFinishHandler[] = useMemo(() => [], []);

  const onTickHandlers: OnTickHandler[] = useMemo(() => [], []);

  let timerState: ITimerState = useMemo(
    () => ({ isRunning: false, started: false }),
    []
  );

  const onStartTimer = (endTime: Date) => {
    // Do not restart timer, if it is already running
    if (timerState.isRunning) {
      return;
    }
    timerState.isRunning = true;
    timerState.started = true;
    startTimer(endTime, timerState);
  };

  const onFinishTimer = () => {
    setRemainingSeconds(0);
    timerState.isRunning = false;
    timerState.started = false;
    onFinishHandlers.forEach((handler) => handler());
    return;
  };

  const startTimer = (endTime: Date, timerState: ITimerState) => {
    // Stop timer, if it was stopped from outside
    if (!timerState.isRunning) {
      return;
    }

    setTimeout(() => {
      const now = new Date();
      const remainingSeconds = Math.round(
        (endTime.getTime() - now.getTime()) / 1000
      );

      if (remainingSeconds <= 0) {
        onFinishTimer();
        return;
      }

      onTickHandlers.forEach((handler) => handler(remainingSeconds));
      setRemainingSeconds(remainingSeconds);
      startTimer(endTime, timerState);
    }, 200);
  };

  const isPaused = timerState.started && !timerState.isRunning;

  const onFinish = (handler: OnFinishHandler) => {
    onFinishHandlers.push(handler);
    return () => {
      const index = onFinishHandlers.findIndex((item) => item === handler);
      if (index !== -1) {
        onFinishHandlers.splice(index, 1);
      }
    };
  };

  const onTick = (handler: OnTickHandler) => {
    onTickHandlers.push(handler);
    return () => {
      const index = onTickHandlers.findIndex((item) => item === handler);
      if (index !== -1) {
        onTickHandlers.splice(index, 1);
      }
    };
  };

  const stop = () => {
    timerState.isRunning = false;
  };

  const reset = () => {
    timerState.isRunning = false;
    timerState.started = false;
    setRemainingSeconds(seconds);
  };

  const start = () => {
    const endTime = new Date();
    endTime.setSeconds(endTime.getSeconds() + remainingSeconds);
    onStartTimer(endTime);
  };

  return {
    isRunning: timerState.isRunning,
    isPaused,
    onFinish,
    onTick,
    reset,
    start,
    stop,
  };
};
