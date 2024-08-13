/**
 * This class is responsible for providing information about the underlying device
 */
export class DeviceInfo {
  /**
   * Derives the platform from navigator.userAgent
   */
  static get platform(): string {
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Windows NT")) {
      return "Windows";
    } else if (userAgent.includes("Mac OS X")) {
      return "MacOS";
    } else if (userAgent.includes("Linux")) {
      return "Linux";
    } else if (userAgent.includes("Android")) {
      return "Android";
    } else if (userAgent.includes("like Mac OS X")) {
      return "iOS";
    } else {
      return "Unknown";
    }
  }
}
