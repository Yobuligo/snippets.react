import { AppConfig } from "../../AppConfig";
import { RESTApi } from "./RESTApi";
import { IHavePath } from "./types/IHavePath";

export abstract class Repository<T> extends RESTApi {
  constructor(private meta: IHavePath) {
    super();
  }

  /**
   * Returns all instances of this entity
   */
  async findAll(): Promise<T[]> {
    return await this.get(this.url);
  }

  async deleteById(id: string): Promise<boolean> {
    return await this.delete(`${this.url}/${id}`);
  }

  async insert(data: T): Promise<T> {
    return await this.post(this.url, data);
  }

  async insertAll(data: T[]): Promise<T[]> {
    return await this.post(this.url, data);
  }

  async update(data: T) {
    await this.put(this.url, data);
  }

  async updateAll(data: T[]) {
    await this.put(this.url, data);
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
    return `${this.host}${this.meta.path}`;
  }
}
