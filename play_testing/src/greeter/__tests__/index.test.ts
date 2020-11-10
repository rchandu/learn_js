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

    // it("should greet hello guest if no name is given", () => {
    //   expect(greeterInstance.sayHi()).toBe("Hello Guest!");
    // });

    // it("Should greet by the name entered", () => {
    //   expect(greeterInstance.sayHi("Rama")).toBe("Hello Rama!");
    // });

    // it("Should greet with a gender prefix if provided", () => {
    //   expect(greeterInstance.sayHi("Rama", 1)).toBe("Hello Mr.Rama!");
    // });

    // it("Should greet with a gender prefix if provided - female", () => {
    //   expect(greeterInstance.sayHi("Ramya", 2)).toBe("Hello Mrs.Ramya!");
    // });

    // it("Should greet with a gender prefix if gender provided as string", () => {
    //   expect(greeterInstance.sayHi("Rama", 'm')).toBe("Hello Mr.Rama!");
    // });

    // it("Should greet with a gender prefix if gender provided as string - female", () => {
    //   expect(greeterInstance.sayHi("Ramya", 'f')).toBe("Hello Mrs.Ramya!");
    // });
  });

  // describe("sayBye", () => {
  //   beforeEach(() => {
  //     greeterInstance = new Greeter();
  //   });

  //   it("should greet as guest if no name is given", () => {
  //     expect(greeterInstance.sayBye()).toBe("Hello Guest!");
  //   });

  //   it("Should greet by the name entered", () => {
  //     expect(greeterInstance.sayBye("Rama")).toBe("Hello Rama!");
  //   });

  //   it("Should greet with a gender prefix if provided", () => {
  //     expect(greeterInstance.sayBye("Rama", 1)).toBe("Hello Mr.Rama!");
  //   });

  //   it("Should greet with a gender prefix if provided - female", () => {
  //     expect(greeterInstance.sayBye("Ramya", 2)).toBe("Hello Mrs.Ramya!");
  //   });

  //   it("Should greet with a gender prefix if gender provided as string", () => {
  //     expect(greeterInstance.sayBye("Rama", 'm')).toBe("Hello Mr.Rama!");
  //   });

  //   it("Should greet with a gender prefix if gender provided as string - female", () => {
  //     expect(greeterInstance.sayBye("Ramya", 'f')).toBe("Hello Mrs.Ramya!");
  //   });
  // });

  // describe("sayBye", () => {
  //   beforeEach(() => {
  //     greeterInstance = new Greeter();
  //   });

  //   it("should greet as guest if no name is given", () => {
  //     expect(greeterInstance.sayBye()).toBe("Bye Guest!");
  //   });

  //   it("Should greet by the name entered", () => {
  //     expect(greeterInstance.sayBye("Rama")).toBe("Bye Rama!");
  //   });

  //   it("Should greet with a gender prefix if provided", () => {
  //     expect(greeterInstance.sayBye("Rama", 1)).toBe("Bye Mr.Rama!");
  //   });

  //   it("Should greet with a gender prefix if provided - female", () => {
  //     expect(greeterInstance.sayBye("Ramya", 2)).toBe("Bye Mrs.Ramya!");
  //   });

  //   it("Should greet with a gender prefix if gender provided as string", () => {
  //     expect(greeterInstance.sayBye("Rama", 'm')).toBe("Bye Mr.Rama!");
  //   });

  //   it("Should greet with a gender prefix if gender provided as string - female", () => {
  //     expect(greeterInstance.sayBye("Ramya", 'f')).toBe("Bye Mrs.Ramya!");
  //   });
  // });
});
