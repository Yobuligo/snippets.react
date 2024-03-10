export interface IRoute<TPath extends string> {
  readonly origin: TPath;
}
