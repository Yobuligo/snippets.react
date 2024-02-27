/**
 * An error that occurs when a state is or becomes inconsistent.
 *
 * E.g. if a value must not be undefined but undefined is set as value.
 */
export class IllegalArgumentError extends Error {}
