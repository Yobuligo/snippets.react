import { ServiceConstructor } from "./types/ServiceConstructor";
import { ServiceType } from "./types/ServiceType";

/**
 * An implementation of this interface is responsible for creating, caching and returning services.
 */
export interface IServiceProvider {
  /**
   * Returns if a service of the given {@link type} was set by {@link put} or created and cached by fetch.
   */
  contains<T>(type: ServiceConstructor<T>): boolean;

  /**
   * Returns a service instance of the given {@link type}.
   * The service can be set via method {@link put}, otherwise an instance of {@link type} itself will be created, cached and returned.
   */
  fetch<T>(type: ServiceConstructor<T>): ServiceType<T>;

  /**
   * Sets the {@link service} for the given {@link type}.
   * The {@link service} must not be of the concrete class type of {@link type} but only contain the corresponding methods.
   */
  put<T>(type: ServiceConstructor<T>, service: ServiceType<T>): void;
}
