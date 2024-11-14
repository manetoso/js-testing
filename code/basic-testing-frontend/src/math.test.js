import { it, expect, describe } from "vitest";
import { add } from "./math";

describe("math.js", () => {
  it("should summarize all number values in an array", () => {
    const numbers = [1, 1];
    const expectedResult = numbers.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0,
    );
    const result = add(numbers);
    expect(result).toBe(expectedResult);
  });

  it("should yield NaN if at least one invalid number is provided", () => {
    const inputs = [1, "a"];
    const result = add(inputs);
    expect(result).toBeNaN();
  });

  it("should yield a correct sum if an array of numeric string values is provided", () => {
    const numbers = ["1", "2"];
    const expectedResult = numbers.reduce(
      (previousValue, currentValue) => +previousValue + +currentValue,
      0,
    );
    const result = add(numbers);
    expect(result).toBe(expectedResult);
  });

  it("should yield 0 if an empty array is provided", () => {
    const numbers = [];
    const result = add(numbers);
    expect(result).toBe(0);
  });

  it("should throw an error if no value is passed into the function", () => {
    const resultFN = () => add();
    expect(resultFN).toThrowError(/is not iterable/);
  });

  it("should throw an error if provided with multiple arguments instead of an array", () => {
    const num1 = 1;
    const num2 = 2;
    const resultFN = () => add(num1, num2);
    expect(resultFN).toThrowError(/is not iterable/);
  });
});
