import { error } from "../../../core/utils/error";
import { ISelectOption } from "../ISelectOption";
import { findByTextOrNull } from "./findByTextOrNull";

export const findByText = <T extends ISelectOption<any>>(
  options: T[],
  text: string
): T => {
  return (
    findByTextOrNull(options, text) ??
    error(`Error while selecting option. Option '${text}' is unknown.`)
  );
};
