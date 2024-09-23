export class Duration {
  private msecInSeconds = 1000;
  private msecInMinutes = 60000;
  private msecInHours = 3600000;
  private _days: number | undefined;
  private _hours: number | undefined;
  private _hoursInDay: number = 24;
  private _totalHours: number | undefined;
  private _minutes: number | undefined;
  private _seconds: number | undefined;
  private _milliseconds: number | undefined;

  constructor(
    /**
     * Returns the total milliseconds of the duration.
     */
    readonly totalMilliseconds: number
  ) {}

  /**
   * Returns the number of days of this duration, considering {@link hoursInDay}.
   *
   * Lets assume the totalMilliseconds are 126000000. This means we have 35 hours total. So {@link days} would return 1 (1 day and 11 hours).
   * In case we set {@link hoursInDay} to 8 hours (e.g. a working day), {@link days} will return 4 (4 working days and 3 hours).
   */
  get days(): number {
    if (this._days === undefined) {
      this.calculate();
    }
    return this._days!;
  }

  /**
   * Returns the number of hours of this duration, considering {@link hoursInDay}.
   *
   * Lets assume the totalMilliseconds are 126000000. This means we have 35 hours total. So {@link hours} would return 11 (1 day and 11 hours).
   * In case we set {@link hoursInDay} to 8 hours (e.g. a working day), {@link hours} will return 3 (4 working days and 3 hours).
   */
  get hours(): number {
    if (this._hours === undefined) {
      this.calculate();
    }
    return this._hours!;
  }

  /**
   * Returns the number of hours in a day.
   * The default is 24 hours. Can be set to e.g. 8 hours (a working day) to consider it in the calculation of {@link days} and {@link hours}.
   */
  get hoursInDay(): number {
    return this._hoursInDay;
  }

  /**
   * Sets the number of hours in a day.
   * The default is 24 hours. Can be set to e.g. 8 hours (a working day) to consider it in the calculation of {@link days} and {@link hours}.
   */
  set hoursInDay(hoursInDay: number) {
    if (hoursInDay === this._hoursInDay) {
      return;
    }

    // Set hoursInDay and reset values, as we have to recalculate
    this._hoursInDay = hoursInDay;
    this.reset();
  }

  /**
   * Returns the milliseconds of the duration.
   *
   * E.g. will return 123 for a duration with totalMilliseconds of 126000123.
   */
  get milliseconds(): number {
    if (this._milliseconds === undefined) {
      this.calculate();
    }
    return this._milliseconds!;
  }

  /**
   * Returns the minutes of the duration.
   */
  get minutes(): number {
    if (this._minutes === undefined) {
      this.calculate();
    }
    return this._minutes!;
  }

  /**
   * Returns the seconds of the duration.
   */
  get seconds(): number {
    if (this._seconds === undefined) {
      this.calculate();
    }
    return this._seconds!;
  }

  /**
   * Returns the total hours of the duration.
   *
   * E.g. a duration with totalMilliseconds of 126000000 will return 35 hours.
   */
  get totalHours(): number {
    if (this._totalHours === undefined) {
      this.calculate();
    }
    return this._totalHours!;
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
    const msecInDays = this.msecInHours * this.hoursInDay;
    this._days = Math.floor(this.totalMilliseconds / msecInDays);
    this._totalHours = Math.floor(this.totalMilliseconds / this.msecInHours);
    this._hours = Math.floor(
      (this.totalMilliseconds % msecInDays) / this.msecInHours
    );
    this._minutes = Math.floor(
      (this.totalMilliseconds % this.msecInHours) / this.msecInMinutes
    );
    this._seconds = Math.floor(
      (this.totalMilliseconds % this.msecInMinutes) / this.msecInSeconds
    );
    this._milliseconds = this.totalMilliseconds % this.msecInSeconds;
  }

  private reset() {
    this._days = undefined;
    this._hours = undefined;
    this._totalHours = undefined;
    this._minutes = undefined;
    this._seconds = undefined;
    this._milliseconds = undefined;
  }
}
