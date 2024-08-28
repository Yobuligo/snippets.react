import { AppConfig } from "../../AppConfig";
import { IRouteMeta } from "../../core/api/types/IRouteMeta";
import { RESTApi } from "./RESTApi";

export abstract class Repository<T> extends RESTApi {
  constructor(private routeMeta: IRouteMeta) {
    super();
  }

  /**
   * Returns all instances of this entity
   */
  async findAll(): Promise<T[]> {
    return await this.requestGet(this.url);
  }

  async deleteById(id: string): Promise<boolean> {
    return await this.requestDelete(`${this.url}/${id}`);
  }

  async insert(data: T): Promise<T> {
    return await this.requestPost(this.url, data);
  }

  async insertAll(data: T[]): Promise<T[]> {
    return await this.requestPost(this.url, data);
  }

  async update(data: T) {
    await this.requestPut(this.url, data);
  }

  async updateAll(data: T[]) {
    await this.requestPut(this.url, data);
  }

  /**
   * Returns the host name of the backend.
   *
   * @example
   * localhost:5000/api
   */
  protected get host(): string {
    return AppConfig.HOST;
  }

  /**
   * Returns the url for this repository, a combination of host and path.
   *
   * @example
   * localhost:5000/api/persons
   */
  protected get url(): string {
    return `${this.host}${this.routeMeta.path}`;
  }
}
