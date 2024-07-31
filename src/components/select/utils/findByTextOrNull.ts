import { ISelectOption } from "../ISelectOption";

export const findByTextOrNull = <T extends ISelectOption<any>>(
  options: T[],
  text: string
): T | undefined => {
  for (const option of options) {
    if (option.text === text) {
      return option;
    }
  }
  return undefined;
};
