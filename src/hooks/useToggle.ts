import { useState } from "react";

export const useToggle = (
  initialValue?: boolean
): [value: boolean, toggleValue: (newValue?: boolean) => void] => {
  const [value, setValue] = useState<boolean>(initialValue ?? false);

  const toggleValue = (newValue?: boolean) =>
    newValue ? setValue(newValue) : setValue((previous) => !previous);

  return [value, toggleValue];
};
