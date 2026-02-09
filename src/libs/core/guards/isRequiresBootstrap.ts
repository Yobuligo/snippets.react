import { IRequiresBootstrap } from "../types/IRequiresBootstrap";

export const isRequiresBootstrap = (
  value: any,
): value is IRequiresBootstrap => {
  return (
    typeof value === "object" &&
    value !== null &&
    value !== undefined &&
    "bootstrap" in value &&
    typeof value.bootstrap === "function"
  );
};
