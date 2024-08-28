import { IError } from "../../core/types/IError";
import { createError } from "../../core/utils/createError";
import { isError } from "../../core/utils/isError";
import { UrlParamsBuilder } from "../../lib/urlParamsExtender/UrlParamsBuilder";
import { UrlParamsExtenderRegistry } from "./UrlParamsExtenderRegistry";

export abstract class RESTApi {
  protected requestDelete<T>(url: string): Promise<T> {
    return this.createPromise(url, async (extendedUrl) => {
      return await fetch(extendedUrl, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
        mode: "cors",
      });
    });
  }

  protected requestGet<T>(url: string): Promise<T> {
    return this.createPromise(url, async (extendedUrl) => {
      return await fetch(extendedUrl, {
        method: "GET",
      });
    });
  }

  protected requestPut<T>(url: string, data: any): Promise<T> {
    return this.createPromise(url, async (extendedUrl) => {
      const body = JSON.stringify(data);
      return await fetch(extendedUrl, {
        body: body,
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        mode: "cors",
      });
    });
  }

  protected requestPost<T>(url: string, data: any): Promise<T> {
    return this.createPromise(url, async (extendedUrl) => {
      const body = JSON.stringify(data);
      return await fetch(extendedUrl, {
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
      extendedUrl: string,
      resolve: (value: T | PromiseLike<T>) => void,
      reject: (reason?: any) => void
    ) => Promise<Response>
  ): Promise<T> {
    return new Promise<T>(async (resolve, reject) => {
      const extendedUrl = this.extendUrl(url);
      try {
        const response = await request(extendedUrl, resolve, reject);
        if (response.ok) {
          const data = await response.json();
          resolve(data);
        } else {
          const data = await response.json();
          if (isError(data)) {
            reject(data);
          } else {
            reject(this.createFetchError(extendedUrl));
          }
        }
      } catch (error) {
        if (isError(error)) {
          reject(error);
        } else {
          reject(this.createFetchError(extendedUrl));
        }
      }
    });
  }

  private createFetchError(url: string): IError {
    return createError(`Error while fetching data from '${url}'`);
  }

  /**
   * Extends the {@link url}, e.g. by adding a the session token or parameters.
   * Adding will be realized via UrlParamsExtender, that must be registered in {@link UrlParamsExtenderRegistry}.
   *
   */
  private extendUrl(url: string): string {
    const urlParamsBuilder = new UrlParamsBuilder(
      url,
      UrlParamsExtenderRegistry
    );
    const extendedUrl = urlParamsBuilder.build();
    return extendedUrl;
  }
}
