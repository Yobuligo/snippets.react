import { RouteSearchMapper } from "../RouteSearchMapper";

describe("RouteSearchMapper", () => {
  describe("fromPathToString", () => {
    it("Returns path if no search was provided", () => {
      const routeSearchMapper = new RouteSearchMapper();
      expect(routeSearchMapper.fromPathToString("/users")).toBe("/users");
    });

    it("Returns path including query param", () => {
      const routeSearchMapper = new RouteSearchMapper(
        { query: { firstname: "firstname" } },
        { query: { firstname: "Stacey" } },
      );
      expect(routeSearchMapper.fromPathToString("/users")).toBe(
        "/users?firstname=Stacey",
      );
    });

    it("Returns path including mapped query param name", () => {
      const routeSearchMapper = new RouteSearchMapper(
        { query: { organisationName: "organisation-name" } },
        { query: { organisationName: "Test" } },
      );
      expect(routeSearchMapper.fromPathToString("/users")).toBe(
        "/users?organisation-name=Test",
      );
    });

    it("Returns path including multiple query params", () => {
      const routeSearchMapper = new RouteSearchMapper(
        {
          query: {
            firstname: "firstname",
            organisationName: "organisation-name",
          },
        },
        { query: { firstname: "Stacey", organisationName: "Test" } },
      );
      expect(routeSearchMapper.fromPathToString("/users")).toBe(
        "/users?firstname=Stacey&organisation-name=Test",
      );
    });

    it("Returns path including hash param", () => {
      const routeSearchMapper = new RouteSearchMapper(
        { hash: { bank: "bank" } },
        { hash: "bank" },
      );
      expect(routeSearchMapper.fromPathToString("/users")).toBe("/users#bank");
    });

    it("Returns path including mapped hash param name", () => {
      const routeSearchMapper = new RouteSearchMapper(
        { hash: { companyData: "company-data" } },
        { hash: "companyData" },
      );
      expect(routeSearchMapper.fromPathToString("/users")).toBe(
        "/users#company-data",
      );
    });

    it("Returns path including query and hash param name", () => {
      const routeSearchMapper = new RouteSearchMapper(
        {
          hash: { companyData: "company-data" },
          query: {
            firstname: "firstname",
            organisationName: "organisation-name",
          },
        },
        {
          hash: "companyData",
          query: { firstname: "Stacey", organisationName: "Test" },
        },
      );
      expect(routeSearchMapper.fromPathToString("/users")).toBe(
        "/users?firstname=Stacey&organisation-name=Test#company-data",
      );
    });
  });
});
