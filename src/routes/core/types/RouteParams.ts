/**
 * This type returns true, if {@link TPart} contains a parameter, whose value can be injected during runtime, otherwise false.
 *
 * A parameter is identified by a starting colon like :id, otherwise it is identified as a common string.
 */
type IsParameter<TPart> = TPart extends `:${infer ParamName}`
  ? ParamName
  : never;

/**
 * This type represents a union type which contains all extracted parameter names from the given {@link TPath}.
 *
 * E.g.: /projects/:projectId/system/:systemId becomes "projectId" | "systemId".
 */
type FilteredParts<TPath> = TPath extends `${infer TPartA}/${infer TPartB}`
  ? IsParameter<TPartA> | FilteredParts<TPartB>
  : IsParameter<TPath>;

/**
 * This type represents an object type, that contains a property for each parameter of the given {@link TPath}.
 * It is required for providing values of type string for the parameters of {@link TPath}.
 *
 * @example
 * type MyType = RouteParams<"/projects/:projectId/system/:systemId">;
 * type EqualTo = {
 *   projectId: string,
 *   systemId: string,
 * };
 */
export type RouteParams<TPath> = { [P in FilteredParts<TPath>]: string };
