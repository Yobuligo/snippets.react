export enum HttpStatusCode {
  /**
   * The request succeeded.
   */
  OK_200 = 200,

  /**
   * The request succeeded, and a new resource was created as a result. This is typically the response sent after POST requests, or some PUT requests.
   */
  CREATED_201 = 201,

  /**
   * The request succeeded but no content was found. This is typically the response sent after DELETE requests, if entry to be deleted was not found.
   */
  NO_CONTENT_204 = 204,

  /**
   * The server cannot or will not process the request due to something that is perceived to be a client error.
   */
  BAD_REQUEST_400 = 400,

  /**
   * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated".
   */
  UNAUTHORIZED_401 = 401,

  /**
   * The client does not have access rights to the content, so the server is refusing to give the requested resource.
   */
  FORBIDDEN_403 = 403,

  /**
   * The server cannot find the requested resource.
   */
  NOT_FOUND_404 = 404,

  /**
   * This response is sent when a request conflicts with the current state of the server.
   */
  CONFLICT_409 = 409,

  /**
   * The server has encountered a situation it does not know how to handle.
   */
  INTERNAL_SERVER_ERROR_500 = 500,
}
