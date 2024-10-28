"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const add_1 = __importDefault(require("../src/add")); // Adjust path as necessary
describe("String Calculator", () => {
    it("should return 0 for an empty string", () => {
        (0, chai_1.expect)((0, add_1.default)("")).to.equal(0);
    });
    it("should return the number itself for a single number input", () => {
        (0, chai_1.expect)((0, add_1.default)("1")).to.equal(1);
    });
    it("should return the sum for two numbers separated by a comma", () => {
        (0, chai_1.expect)((0, add_1.default)("1,5")).to.equal(6);
    });
    it("should return the sum for any amount of comma-separated numbers", () => {
        (0, chai_1.expect)((0, add_1.default)("1,2,3,4,5")).to.equal(15);
    });
    it("should handle new lines between numbers as delimiters", () => {
        (0, chai_1.expect)((0, add_1.default)("1\n2,3")).to.equal(6);
    });
    it('should handle custom delimiters specified in the format "//[delimiter]\\n[numbers]"', () => {
        (0, chai_1.expect)((0, add_1.default)("//;\n1;2")).to.equal(3);
        (0, chai_1.expect)((0, add_1.default)("//@\n1@2@12")).to.equal(15);
        (0, chai_1.expect)((0, add_1.default)("//-\n1-2-12")).to.equal(15);
        (0, chai_1.expect)((0, add_1.default)("//~\n1~2~12")).to.equal(15);
        (0, chai_1.expect)((0, add_1.default)("//|\n1|2|3")).to.equal(6);
        (0, chai_1.expect)((0, add_1.default)("//+\n1+2+3")).to.equal(6);
        (0, chai_1.expect)((0, add_1.default)("///\n1/2/3")).to.equal(6);
    });
    it("should throw an exception for invalid input due to incorrect format", () => {
        (0, chai_1.expect)(() => (0, add_1.default)("//;\n1;2;wrong")).to.throw("Invalid input: wrong");
        (0, chai_1.expect)(() => (0, add_1.default)("//;\n1;2;1 2")).to.throw("Invalid input: 1 2");
    });
    it("should throw an exception for negative numbers with all negative numbers in the message", () => {
        (0, chai_1.expect)(() => (0, add_1.default)("1,2,-3,4,-5")).to.throw("Negative numbers not allowed: -3, -5");
    });
});
