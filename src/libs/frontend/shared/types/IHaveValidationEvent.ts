import { IEvent } from "../../../core/services/event/IEvent";

/**
 * Provides property validationEvent, which is required to register a handler of the type {@link TValidator}. 
 * The {@link validationEvent} owner calls the registered handler to request to validate themselves.
 */
export interface IHaveValidationEvent<TValidator extends Function> {
  validationEvent: IEvent<TValidator>;
}
