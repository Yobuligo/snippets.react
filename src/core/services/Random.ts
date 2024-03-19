import { NotSupportedError } from "../errors/NotSupportedError";

/**
 * This class is responsible for creating random numbers
 */
export class Random {
  static next(range: number): number;
  static next(min: number, max: number): number;
  static next(first?: number, second?: number): number {
    if (first && !second) {
      return Math.floor(Math.random() * first) + 1;
    }

    if (first && second) {
      return Math.floor(Math.random() * (second - first + 1) + first);
    }

    throw new NotSupportedError(
      `Error while generating random number. Constellation is not supported`
    );
  }
}
