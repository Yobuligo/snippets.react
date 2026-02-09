import { DecoratorStore } from "../decorator/DecoratorStore";
import { IServiceProvider } from "./IServiceProvider";
import { Service } from "./Service";
import { IServiceOptions } from "./types/IServiceOptions";
import { ServiceConstructor } from "./types/ServiceConstructor";
import { ServiceInstanceType } from "./types/ServiceInstanceType";
import { ServiceType } from "./types/ServiceType";

class ServiceProvider implements IServiceProvider {
  private static instance: ServiceProvider;
  private definitions: Map<ServiceConstructor<any>, any> = new Map();
  private instances: Map<ServiceConstructor<any>, any> = new Map();

  private constructor() {}

  /**
   * Creates the singleton instance of {@link ServiceProvider}.
   */
  static getInstance(): ServiceProvider {
    if (!this.instance) {
      this.instance = new ServiceProvider();
    }
    return this.instance;
  }

  contains<T>(type: ServiceConstructor<T>): boolean {
    return (
      this.definitions.get(type) !== undefined ||
      this.instances.get(type) !== undefined
    );
  }

  fetch<T>(type: ServiceConstructor<T>): ServiceType<T> {
    return this.definitions.get(type) ?? this.createService(type);
  }

  put<T>(type: ServiceConstructor<T>, service: ServiceType<T>): void {
    this.definitions.set(type, service);
  }

  private createService<T>(type: ServiceConstructor<T>): ServiceType<T> {
    // get service options
    const serviceOptions: IServiceOptions | undefined = DecoratorStore.get(
      type,
      Service
    );
    if (this.isSingleInstantiable(serviceOptions)) {
      return this.instances.get(type) ?? this.fetchInstance(type);
    } else {
      // multi instantiable, create new Instance
      return new type();
    }
  }

  private fetchInstance<T>(type: ServiceConstructor<T>): ServiceType<T> {
    const instance = new type();
    this.instances.set(type, instance);
    return instance;
  }

  private isSingleInstantiable(
    serviceOptions: IServiceOptions | undefined
  ): boolean {
    return (
      serviceOptions === undefined ||
      serviceOptions.serviceInstanceType === undefined ||
      serviceOptions.serviceInstanceType ===
        ServiceInstanceType.SINGLE_INSTANTIABLE
    );
  }
}

/**
 * This constants refers to the singleton instance of {@link ServiceProvider}.
 */
export const SP = ServiceProvider.getInstance();
