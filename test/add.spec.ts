import { expect } from "chai";
import add from "../src/add"; // Adjust path as necessary

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).to.equal(0);
  });

  it("should return the number itself for a single number input", () => {
    expect(add("1")).to.equal(1);
  });

  it("should return the sum for two numbers separated by a comma", () => {
    expect(add("1,5")).to.equal(6);
  });

  it("should return the sum for any amount of comma-separated numbers", () => {
    expect(add("1,2,3,4,5")).to.equal(15);
  });

  it("should handle new lines between numbers as delimiters", () => {
    expect(add("1\n2,3")).to.equal(6);
  });

  it('should handle custom delimiters specified in the format "//[delimiter]\\n[numbers]"', () => {
    expect(add("//;\n1;2")).to.equal(3);
    expect(add("//@\n1@2@12")).to.equal(15);
    expect(add("//-\n1-2-12")).to.equal(15);
    expect(add("//~\n1~2~12")).to.equal(15);
    expect(add("//|\n1|2|3")).to.equal(6);
    expect(add("//+\n1+2+3")).to.equal(6);
    expect(add("///\n1/2/3")).to.equal(6);
  });

  it("should throw an exception for invalid input due to incorrect format", () => {
    expect(() => add("//;\n1;2;wrong")).to.throw("Invalid input: wrong");
    expect(() => add("//;\n1;2;1 2")).to.throw("Invalid input: 1 2");
  });

  it("should throw an exception for negative numbers with all negative numbers in the message", () => {
    expect(() => add("1,2,-3,4,-5")).to.throw(
      "Negative numbers not allowed: -3, -5"
    );
  });
});
