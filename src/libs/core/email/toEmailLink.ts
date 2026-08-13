/**
 * Converts the given {@link email} to an email link in format mailTo:abcdefg@test.de.
 */
export const toEmailLink = (email: string) => {
  return `mailto:${email}`;
};
