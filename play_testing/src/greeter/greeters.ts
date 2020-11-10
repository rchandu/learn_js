export class Greeter {
  #userName = "Guest";
  #gender = 0;

  #getGreetName = () => {
    let label = "";
    label = this.#gender > 0 ? (this.#gender === 1 ? `${label}Mr.` : `${label}Mrs.`) : label;
    return `${label}${this.#userName}!`;
  };

  #parseGreetParams = (targetName = "Guest", gender: number | string = 0) => {
    this.#userName = !!targetName ? targetName : this.#userName;
    if (!!gender) {
      gender = typeof gender === "string" ? (gender === "m" ? 1 : 2) : gender;
      this.#gender = !!gender && gender > 0 ? gender : this.#gender;
    }
  };

  sayHi(targetName = "Guest", gender: number | string = 0) {
    this.#parseGreetParams(targetName, gender);
    return `Hello ${this.#getGreetName()}`;
  }

  sayBye(targetName = "Guest", gender: number | string = 0) {
    this.#parseGreetParams(targetName, gender);
    return `Bye ${this.#getGreetName()}`;
  }
}

export class Greeter2 {
  sayHi(a = "Guest", b = 0) {
    if (!!b) {
      b = typeof b === "string" ? (b === "m" ? 1 : 2) : b;
      b = !!b && b > 0 ? b : b;
    }
    return `Hello ${b > 0 ? (b === 1 ? "Mr." : "Mrs.") : ""}${!!a ? a : "Guest"}!`;
  }

  sayBye(m = "Guest", b = 0) {
    if (!!b) {
      b = typeof b === "string" ? (b === "m" ? 1 : 2) : b;
      b = !!b && b > 0 ? b : b;
    }
    return `Bye ${b > 0 ? (b === 1 ? "Mr." : "Mrs.") : ""}${!!m ? m : "Guest"}!`;
  }
}
