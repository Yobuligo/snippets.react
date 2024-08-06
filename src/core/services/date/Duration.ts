export class Duration {
  private msecInSeconds = 1000;
  private msecInMinutes = 60000;
  private msecInHours = 3600000;
  private msecInDays = 86400000;
  private _days: number | undefined;
  private _hours: number | undefined;
  private _minutes: number | undefined;
  private _seconds: number | undefined;
  private _msecs: number | undefined;

  constructor(private readonly ticks: number) {}

  get days(): number {
    if (this._days === undefined) {
      this.calculate();
    }
    return this._days!;
  }

  get hours(): number {
    if (this._hours === undefined) {
      this.calculate();
    }
    return this._hours!;
  }

  get minutes(): number {
    if (this._minutes === undefined) {
      this.calculate();
    }
    return this._minutes!;
  }

  get seconds(): number {
    if (this._seconds === undefined) {
      this.calculate();
    }
    return this._seconds!;
  }

  get msec(): number {
    if (this._msecs === undefined) {
      this.calculate();
    }
    return this._msecs!;
  }

  static sum(...durations: Duration[]): Duration {
    let ticks: number = 0;
    durations.forEach((duration) => (ticks += duration.ticks));
    return new Duration(ticks);
  }

  private calculate() {
    this._days = Math.floor(this.ticks / this.msecInDays);
    this._hours = Math.floor((this.ticks % this.msecInDays) / this.msecInHours);
    this._minutes = Math.floor(
      (this.ticks % this.msecInHours) / this.msecInMinutes
    );
    this._seconds = Math.floor(
      (this.ticks % this.msecInMinutes) / this.msecInSeconds
    );
    this._msecs = this.ticks % this.msecInSeconds;
  }
}
