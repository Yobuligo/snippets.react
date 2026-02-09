/**
 * This object type represents all methods and properties of service {@link T}.
 */
export type ServiceType<T> = { [P in keyof T]: T[P] };
