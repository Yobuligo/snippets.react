import { isEmailValid } from "./isEmailValid";

export const isEmailInvalid = (email: string): boolean => !isEmailValid(email);
