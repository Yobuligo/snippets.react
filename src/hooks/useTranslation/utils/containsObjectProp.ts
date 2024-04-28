/**
 * Returns if {@link placeholders} contains a property which is of type object.
 * @example
 * // Here property link would be of object type JSX.Element. So the function would return true
 * { contractId: "123", link: <></> };
 */
export const containsObjectProp = <T extends object>(placeholders: T) => {
  for (const propName in placeholders) {
    if (typeof placeholders[propName] === "object") {
      return true;
    }
  }
  return false;
};
