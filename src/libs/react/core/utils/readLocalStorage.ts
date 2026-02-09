export const readLocalStorage = <T>(key: string): T | undefined => {
  const item = localStorage.getItem(key);
  if (!item) {
    return undefined;
  }
  return JSON.parse(item);
};
