export class Duration {
  private msecInSeconds = 1000;
  private msecInMinutes = 60000;
  private msecInHours = 3600000;
  private msecInDays = 86400000;
  private _days: number | undefined;
  private _hours: number | undefined;
  private _totalHours: number | undefined;
  private _minutes: number | undefined;
  private _seconds: number | undefined;
  private _milliseconds: number | undefined;

  constructor(readonly totalMilliseconds: number) {}

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

  get milliseconds(): number {
    if (this._milliseconds === undefined) {
      this.calculate();
    }
    return this._milliseconds!;
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

  get totalHours(): number {
    if (!this._totalHours) {
      this._totalHours = Math.floor(this.totalMilliseconds / this.msecInHours);
    }
    return this._totalHours;
  }

  workingDays(hoursPerWorkingDay: number = 8): number {
    const msecInWorkingDays = this.msecInHours * hoursPerWorkingDay;
    const workingDays = Math.floor(this.totalMilliseconds / msecInWorkingDays);
    return workingDays;
  }  

  /**
   * Compares the 2 dates {@link left} and {@link right}.
   *
   * Returns 1 if {@link left} is greater than {@link right}.
   * Returns -1 if {@link left} is smaller than {@link right}.
   * Returns 0 if {@link left} is equal to {@link right}.
   */
  static compare(left: Duration, right: Duration): number {
    if (left.totalMilliseconds > right.totalMilliseconds) {
      return 1;
    }

    if (left.totalMilliseconds < right.totalMilliseconds) {
      return -1;
    }

    return 0;
  }

  static format(duration: Duration): string {
    return `${duration.days}d ${this.addLeadingZero(
      duration.hours
    )}:${this.addLeadingZero(duration.minutes)}:${this.addLeadingZero(
      duration.seconds
    )}`;
  }

  static sum(...durations: Duration[]): Duration {
    let ticks: number = 0;
    durations.forEach((duration) => (ticks += duration.totalMilliseconds));
    return new Duration(ticks);
  }

  private static addLeadingZero(value: number): string {
    if (value < 10) {
      return `0${value}`;
    }
    return value.toString();
  }

  private calculate() {
    this._days = Math.floor(this.totalMilliseconds / this.msecInDays);
    this._hours = Math.floor(
      (this.totalMilliseconds % this.msecInDays) / this.msecInHours
    );
    this._minutes = Math.floor(
      (this.totalMilliseconds % this.msecInHours) / this.msecInMinutes
    );
    this._seconds = Math.floor(
      (this.totalMilliseconds % this.msecInMinutes) / this.msecInSeconds
    );
    this._milliseconds = this.totalMilliseconds % this.msecInSeconds;
  }
}
