type IsParameter<TPart> = TPart extends `:${infer ParamName}`
  ? ParamName
  : never;
type FilteredParts<TPath> = TPath extends `${infer TPartA}/${infer TPartB}`
  ? IsParameter<TPartA> | FilteredParts<TPartB>
  : IsParameter<TPath>;
export type RouteParams<TPath> = { [P in FilteredParts<TPath>]: string };
