export interface IRequiresBootstrap {
  bootstrap(): Promise<void>;
}
