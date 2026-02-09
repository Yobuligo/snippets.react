import { IHaveId } from "../types/IHaveId";

export const isHaveId = (value: unknown): value is IHaveId => {
  return (
    typeof value === "object" &&
    value !== undefined &&
    value !== null &&
    "id" in value
  );
};
