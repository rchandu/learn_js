import { Greeter } from "..";

let greeterInstance = new Greeter();

describe("Greeter", () => {
  describe("sayHi", () => {
    beforeEach(() => {
      greeterInstance = new Greeter();
    });

    it("should not throw error", () => {
      expect(greeterInstance.sayHi).not.toThrowError();
    });
  });
});
