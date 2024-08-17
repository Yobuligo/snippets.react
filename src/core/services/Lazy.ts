/**
 * This class is responsible for delaying the creation of expensive to create data or which requiring a lot of memory to the time when it is required.
 * The given initializer will only be called when accessing the data.
 */
export class Lazy<T> {
  private _isInitialized: boolean = false;
  private _data?: T = undefined;

  constructor(private initializer: () => T) {}

  public get data(): T {
    if (!this._data) {
      this._data = this.initializer();
      this._isInitialized = true;
    }
    return this._data;
  }

  public get isInitialized(): boolean {
    return this._isInitialized;
  }
}
