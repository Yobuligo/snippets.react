import { Lazy } from "./Lazy";

class Test {
  test(): void {}
}

describe("lazy", () => {
  let countInits: number;
  let test: Test;
  let testObject: Lazy<Test>;

  beforeEach(() => {
    countInits = 0;
    test = new Test();
    testObject = new Lazy(() => {
      countInits++;
      return test;
    });
  });

  it("returns isInitialized false without accessing the value", () => {
    expect(testObject.isInitialized).toBe(false);
  });

  it("returns isInitialized true when accessing the value", () => {
    const data = testObject.data;
    expect(testObject.isInitialized).toBe(true);
  });

  it("returns the initialized value", () => {
    expect(testObject.data === test).toBe(true);
  });

  it("calls the initializer only once", () => {
    const data = testObject.data;
    const data2 = testObject.data;
    expect(countInits).toBe(1);
  });

  it("doesn't call initializer when creating lazy instance", () => {
    expect(countInits === 0).toBe(true);
  });

  it("property isInitialized is readonly", () => {
    let successful: boolean = false;
    try {
      (testObject.isInitialized as any) = false;
    } catch (error) {
      successful = true;
    }
    expect(successful).toBe(true);
  });

  it("property value is readonly", () => {
    let successful: boolean = false;
    try {
      (testObject.data as any) = new Test();
    } catch (error) {
      successful = true;
    }
    expect(successful).toBe(true);
  });
});
