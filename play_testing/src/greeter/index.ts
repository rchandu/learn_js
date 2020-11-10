export class Greeter {
  // #userName = "Guest";
  // #gender = 0;

  // #getGreetName = () => {
  //   let label = "";
  //   label =
  //     this.#gender > 0
  //       ? this.#gender === 1
  //         ? `${label}Mr.`
  //         : `${label}Mrs.`
  //       : label;
  //   return `${label}${this.#userName}!`;
  // };

  // #parseGreetParams = (targetName = "Guest", gender: number | string = 0) => {
  //   this.#userName = !!targetName ? targetName : this.#userName;
  //   if (!!gender) {
  //     gender = typeof gender === "string" ? (gender === "m" ? 1 : 2) : gender;
  //     this.#gender = !!gender && gender > 0 ? gender : this.#gender;
  //   }
  // };

  sayHi() {}

  // sayHi() {
  //   return "Hello Guest!!";
  // }

  // sayHi(targetName: string) {
  //   return `Hello ${targetName}!`;
  // }

  // sayHi(targetName = 'Guest') {
  //   return `Hello ${targetName}!`;
  // }

  // sayHi(targetName = "Guest", gender = 0) {
  //   this.#userName = !!targetName ? targetName : this.#userName;
  //   this.#gender = !!gender && gender > 0 ? gender : this.#gender;
  //   let label = "Hello ";
  //   label =
  //     this.#gender > 0 ? (this.#gender === 1 ? `${label}Mr.` : `${label}Mrs.`) : label;
  //   return `${label}${targetName}!`;
  // }

  // sayHi(targetName = "Guest", gender: number | string = 0) {
  //   this.#userName = !!targetName ? targetName : this.#userName;
  //   if (!!gender) {
  //     gender = typeof gender === "string" ? (gender === "m" ? 1 : 2) : gender;
  //     this.#gender = !!gender && gender > 0 ? gender : this.#gender;
  //   }
  //   let label = "Hello ";
  //   label =
  //     this.#gender > 0
  //       ? this.#gender === 1
  //         ? `${label}Mr.`
  //         : `${label}Mrs.`
  //       : label;
  //   return `${label}${targetName}!`;
  // }

  // sayBye(targetName = "Guest", gender: number | string = 0) {
  //   this.#userName = !!targetName ? targetName : this.#userName;
  //   if (!!gender) {
  //     gender = typeof gender === "string" ? (gender === "m" ? 1 : 2) : gender;
  //     this.#gender = !!gender && gender > 0 ? gender : this.#gender;
  //   }
  //   let label = "Bye ";
  //   label =
  //     this.#gender > 0
  //       ? this.#gender === 1
  //         ? `${label}Mr.`
  //         : `${label}Mrs.`
  //       : label;
  //   return `${label}${targetName}!`;
  // }

  // sayHi(targetName = "Guest", gender: number | string = 0) {
  //   // this.#parseGreetParams(targetName, gender);
  //   this.#userName = !!targetName ? targetName : this.#userName;
  //   if (!!gender) {
  //     gender = typeof gender === "string" ? (gender === "m" ? 1 : 2) : gender;
  //     this.#gender = !!gender && gender > 0 ? gender : this.#gender;
  //   }
  //   let label = "Hello ";
  //   label =
  //     this.#gender > 0
  //       ? this.#gender === 1
  //         ? `${label}Mr.`
  //         : `${label}Mrs.`
  //       : label;
  //   return `${label}${targetName}!`;
  //   // return `Hello ${this.#getGreetName()}`;
  // }

  // sayBye(targetName = "Guest", gender: number | string = 0) {
  //   // this.#parseGreetParams(targetName, gender);
  //   this.#userName = !!targetName ? targetName : this.#userName;
  //   if (!!gender) {
  //     gender = typeof gender === "string" ? (gender === "m" ? 1 : 2) : gender;
  //     this.#gender = !!gender && gender > 0 ? gender : this.#gender;
  //   }
  //   let label = "Bye ";
  //   label =
  //     this.#gender > 0
  //       ? this.#gender === 1
  //         ? `${label}Mr.`
  //         : `${label}Mrs.`
  //       : label;
  //   return `${label}${targetName}!`;
  //   // return `Bye ${this.#getGreetName()}`;
  // }
}
