import { IError } from "../types/IError";

export const createError = (message: string, type?: string): IError => {
  return { createdAt: new Date(), message, type };
};
