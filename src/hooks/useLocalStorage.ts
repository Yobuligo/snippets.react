import { useState } from "react";
import { deleteLocalStorage } from "../core/utils/deleteLocalStorage";
import { readLocalStorage } from "../core/utils/readLocalStorage";
import { writeLocalStorage } from "../core/utils/writeLocalStorage";

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [value: T, setValue: (newValue: T | ((previous: T) => T)) => void] => {
  const [value, setValue] = useState<T>(readLocalStorage(key) ?? initialValue);

  const updateLocalStorage = (key: string, value: any) => {
    if (!value) {
      deleteLocalStorage(key);
    } else {
      writeLocalStorage(key, value);
    }
  };

  const updateValue = (newValue: T | ((previous: T) => T)) => {
    setValue((previous) => {
      if (typeof newValue === "function") {
        previous = (newValue as (previous: T) => T)(previous);
        updateLocalStorage(key, previous);
        return previous;
      } else {
        updateLocalStorage(key, newValue);
        return newValue;
      }
    });
  };

  return [value, updateValue];
};
