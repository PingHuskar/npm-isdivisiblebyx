import {
  ErrorValidsnum,
  IsDivisibleBy2,
  IsDivisibleBy3,
  IsDivisibleBy4,
  IsDivisibleBy5,
  IsDivisibleBy7,
  IsDivisibleBy10,
} from "./src"

class IsDiv {
  #num;
  constructor(num) {
    this.#num = num || "0";
  }
  set(num) {
    if (typeof num === "object") {
      console.error("Invalid type")
      return this;
    }
    try {
      this.#num = `${num}`;
    } catch (e) {
      console.error(e)
    }
    return this;
  }

  get by2() { return IsDivisibleBy2(this.#num) }
  get by3() { return IsDivisibleBy3(this.#num) }
  get by4() { return IsDivisibleBy4(this.#num) }
  get by5() { return IsDivisibleBy5(this.#num) }
  get by7() { return IsDivisibleBy7(this.#num) }
  get by10() { return IsDivisibleBy10(this.#num) }
}

export default IsDiv

export {
  ErrorValidsnum,
  IsDivisibleBy2,
  IsDivisibleBy3,
  IsDivisibleBy4,
  IsDivisibleBy5,
  IsDivisibleBy7,
  IsDivisibleBy10,
};
