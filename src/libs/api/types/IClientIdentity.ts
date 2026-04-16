export interface IClientIdentity {
  /**
   * IP address of the client.
   */
  ipAddress?: string;

  /**
   * UserAgent details of the browser (e.g. Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36)
   */
  userAgent?: string;
}
