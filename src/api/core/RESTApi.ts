import { IError } from "../../core/types/IError";
import { createError } from "../../core/utils/createError";
import { isError } from "../../core/utils/isError";

export abstract class RESTApi {
  protected delete<T>(url: string): Promise<T> {
    return this.createPromise(url, async () => {
      return await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
        mode: "cors",
      });
    });
  }

  protected get<T>(url: string): Promise<T> {
    return this.createPromise(url, async () => {
      return await fetch(url, {
        method: "GET",
      });
    });
  }

  protected put<T>(url: string, data: any): Promise<T> {
    return this.createPromise(url, async () => {
      const body = JSON.stringify(data);
      return await fetch(url, {
        body: body,
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        mode: "cors",
      });
    });
  }

  protected post<T>(url: string, data: any): Promise<T> {
    return this.createPromise(url, async () => {
      const body = JSON.stringify(data);
      return await fetch(url, {
        body: body,
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        mode: "cors",
      });
    });
  }

  private async createPromise<T>(
    url: string,
    request: (
      resolve: (value: T | PromiseLike<T>) => void,
      reject: (reason?: any) => void
    ) => Promise<Response>
  ): Promise<T> {
    return new Promise<T>(async (resolve, reject) => {
      try {
        const response = await request(resolve, reject);
        if (response.ok) {
          const data = await response.json();
          resolve(data);
        } else {
          const data = await response.json();
          if (isError(data)) {
            reject(data);
          } else {
            reject(this.createFetchError(url));
          }
        }
      } catch (error) {
        if (isError(error)) {
          reject(error);
        } else {
          reject(this.createFetchError(url));
        }
      }
    });
  }

  private createFetchError(url: string): IError {
    return createError(`Error while fetching data from '${url}'`);
  }
}
