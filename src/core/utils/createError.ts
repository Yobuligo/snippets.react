import { IError } from "../types/IError";

export const createError = (message: string): IError => {
  return { createdAt: new Date(), message };
};
