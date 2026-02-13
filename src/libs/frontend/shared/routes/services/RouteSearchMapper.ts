import { throwConflictError } from "../../../libs/core/api/errors/utils/throwConflictError";
import { isNotInitial } from "../../../libs/core/utils/isNotInitial";
import { HashParams } from "../types/HashParams";
import { IRouteSearch } from "../types/IRouteSearch";
import { IRouteSearchParams } from "../types/IRouteSearchParams";
import { QueryParams } from "../types/QueryParams";
import { QuerySearch } from "../types/QuerySearch";

export class RouteSearchMapper {
  constructor(
    private readonly searchParams?: IRouteSearchParams<HashParams, QueryParams>,
    private readonly search?: IRouteSearch<HashParams, QueryParams>,
  ) {}

  fromPathToString(path: string): string {
    if (this.search) {
      const [url, query, hash] = this.toString();
      
      if (isNotInitial(query)) {
        return `${path}?${url}`;
      } else {
        return `${path}${hash}`;
      }
    } else {
      return path;
    }
  }

  toString(): [url: string, query: string, hash: string] {
    if (!this.search) return ["", "", ""];

    let hash: string = "";
    let query: string = "";

    if (this.search.hash) {
      hash += this.hashToString(this.search.hash);
    }

    if (this.search.query) {
      query = this.querySearchToString(this.search.query);
    }

    const url = `${query}${hash}`;

    return [url, query, hash];
  }

  private querySearchToString<TQuerySearch extends QuerySearch<QueryParams>>(
    querySearch: TQuerySearch,
  ): string {
    let query: string = "";
    for (const propName in querySearch) {
      const queryParamName = this.getQueryParamName(propName);
      const queryParamValue = querySearch[propName];
      if (query.length === 0) {
        query = `${queryParamName}=${queryParamValue}`;
      } else {
        query += `&${queryParamName}=${queryParamValue}`;
      }
    }
    return query;
  }

  private hashToString(hash: string): string {
    const hashParamName = this.getHashParamName(hash);
    return `#${hashParamName}`;
  }

  /**
   * Extract the correct hash parameter name from search params.
   * This is required if e.g. search params contains hash: { companyData: "company-data" }
   * The url must contain param company-data but not companyData
   */
  private getHashParamName(propName: string): string {
    return (
      this.searchParams?.hash?.[propName] ??
      throwConflictError(
        `[RouteSearchMapper] Error while getting route search hash param name. Route search hash param with name '${propName}' not found.`,
      )
    );
  }

  /**
   * Extract the correct query parameter name from search params.
   * This is required if e.g. search params contains query: { organisationName: "organisation-name" }
   * The url must contain param organisation-name but not organisationName
   */
  private getQueryParamName(propName: string): string {
    return (
      this.searchParams?.query?.[propName] ??
      throwConflictError(
        `[RouteSearchMapper] Error while getting route search query param name. Route search query param with name '${propName}' not found.`,
      )
    );
  }
}
