import { Event } from "../../event/Event";
import { UnregisterHandler } from "../../event/UnregisterHandler";
import { VoidHandler } from "../../types/VoidHandler";
import { ITimer } from "./ITimer";
import { OnRemainingSecondsChangeHandler } from "./OnRemainingSecondsChangeHandler";

export class Timer implements ITimer {
  private _remainingSeconds: number;
  private _isRunning = false;
  private _isStarted = false;
  private timeout: NodeJS.Timeout | undefined = undefined;
  private finishEvent = new Event<VoidHandler>();
  private remainingSecondsChangeEvent =
    new Event<OnRemainingSecondsChangeHandler>();
  private resetEvent = new Event<VoidHandler>();
  private startEvent = new Event<VoidHandler>();
  private stopEvent = new Event<VoidHandler>();
  private tickEvent = new Event<OnRemainingSecondsChangeHandler>();

  constructor(
    private readonly seconds: number,
    readonly tickSize: number = 200
  ) {
    this._remainingSeconds = seconds;
  }

  get remainingSeconds(): number {
    return this._remainingSeconds;
  }

  get isPaused(): boolean {
    return this._isStarted && !this.isRunning;
  }

  get isRunning(): boolean {
    return this._isRunning;
  }

  get isStarted(): boolean {
    return this._isStarted;
  }

  destruct(): void {
    this.stop();
  }

  onRemainingSecondsChange(
    handler: OnRemainingSecondsChangeHandler
  ): UnregisterHandler {
    return this.remainingSecondsChangeEvent.onEvent(handler);
  }

  onFinish(handler: VoidHandler): UnregisterHandler {
    return this.finishEvent.onEvent(handler);
  }

  onReset(handler: VoidHandler): UnregisterHandler {
    return this.resetEvent.onEvent(handler);
  }

  onStart(handler: VoidHandler): UnregisterHandler {
    return this.startEvent.onEvent(handler);
  }

  onStop(handler: VoidHandler): UnregisterHandler {
    return this.stopEvent.onEvent(handler);
  }

  onTick(handler: OnRemainingSecondsChangeHandler): UnregisterHandler {
    return this.tickEvent.onEvent(handler);
  }

  stop(): void {
    if (!this.isRunning) {
      return;
    }
    clearTimeout(this.timeout);
    this._isRunning = false;
    this.stopEvent.notify();
  }

  reset(): void {
    this.stop();
    this._isStarted = false;
    this.setRemainingSeconds(this.seconds);
    this.resetEvent.notify();
  }

  start(): void {
    if (this.isRunning) {
      return;
    }
    this.startTimer();
    this.startEvent.notify();
  }

  private startTimer() {
    this._isRunning = true;
    this._isStarted = true;
    const endTime = this.calcEndTime();
    this.startTimerCycle(endTime);
  }

  private startTimerCycle(endTime: Date) {
    this.timeout = setTimeout(() => {
      const remainingSeconds = this.calcRemainingSeconds(endTime);
      if (remainingSeconds <= 0) {
        this.onFinishTimer();
        return;
      }
      this.setRemainingSeconds(remainingSeconds);
      this.tickEvent.notify(remainingSeconds);
      this.startTimerCycle(endTime);
    }, this.tickSize);
  }

  private calcEndTime(): Date {
    const endTime = new Date();
    endTime.setSeconds(endTime.getSeconds() + this.remainingSeconds);
    return endTime;
  }

  private calcRemainingSeconds(endTime: Date): number {
    const now = new Date();
    return Math.round((endTime.getTime() - now.getTime()) / 1000);
  }

  private onFinishTimer() {
    this._isRunning = false;
    this._isStarted = false;
    this.setRemainingSeconds(0);
    this.tickEvent.notify(this.remainingSeconds);
    this.finishEvent.notify();
    this.reset();
  }

  private setRemainingSeconds(remainingSeconds: number) {
    this._remainingSeconds = remainingSeconds;
    this.remainingSecondsChangeEvent.notify(this.remainingSeconds);
  }
}
