/**
 * This function is responsible for joining several style classes to one string
 */
export const style = (...styles: (string | undefined)[]): string => {
  return styles.join(" ");
};
