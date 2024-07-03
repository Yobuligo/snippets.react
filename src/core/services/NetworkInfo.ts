import dns from "dns";

/**
 * This class is responsible for providing information about the current network
 */
class NetworkInfoDefault {
  /**
   * This function checks, if there is an internet connection
   */
  async isConnected(): Promise<boolean> {
    return new Promise(async (resolve) => {
      await dns.lookup("www.google.com", async (error) => {
        if (error && error.code === "ENOTFOUND") {
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  }
}

export const NetworkInfo = new NetworkInfoDefault();
