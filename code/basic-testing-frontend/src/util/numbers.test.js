import { it, expect, describe } from "vitest";
import { transformToNumber } from "./numbers";

describe("numbers.js", () => {
  it("should transform a string number to type of number", () => {
    const str = "1";
    const result = transformToNumber(str);
    expect(result).toBeTypeOf("number");
  });

  it("should return 0 if an empty array is passed", () => {
    const arr = [];
    const result = transformToNumber(arr);
    expect(result).toBe(0);
  });

  it("should return NaN if an other element than string number is passed", () => {
    const str = "a";
    const result = transformToNumber(str);
    expect(result).toBeNaN();
  });

  it("should return NaN if any prop is passed", () => {
    const result = transformToNumber();
    expect(result).toBeNaN();
  });
});
