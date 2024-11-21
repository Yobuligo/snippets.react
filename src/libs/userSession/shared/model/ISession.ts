import { IEntity } from "../../../../core/api/types/IEntity";

export interface ISession extends IEntity {
  expiresAt: Date;
  userId: string;
}

export const SessionTokenParamMeta = "token";
