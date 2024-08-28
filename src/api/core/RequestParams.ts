import { IEntity } from "../../core/api/types/IEntity";
import { UrlParams } from "./UrlParams";

/**
 * This type represents an object that contains request parameters.
 */
export type RequestParams<T> = {
  /**
   * This property restricts the requested fields.
   *
   * @example
   * { fields: ["firstname", "lastname"] }
   *
   * url = host/persons?fields=firstname,lastname
   */
  fields?: T extends IEntity ? Array<keyof T> : string[];

  /**
   * This property contains url params as key value pairs, which will be added to the request.
   *
   * @example
   * { sort: "firstname" }
   *
   * url = host/persons?sort=firstname
   */
  urlParams?: UrlParams;
};
