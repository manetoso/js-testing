import { it, expect, describe } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";

describe("validateNumber()", () => {
  it("should throw an error if a NaN value is passed", () => {
    const str = "abc";
    const resultFn = () => validateNumber(str);
    expect(resultFn).toThrow(/Invalid number input./);
  });

  it("should return undefined if an empty array is passed", () => {
    const str = [];
    const result = validateNumber(str);
    expect(result).toBeTypeOf("undefined");
  });
});

describe("validateStringNotEmpty()", () => {
  it("should throw an error if an empty string is passed", () => {
    const str = "";
    const resultFn = () => validateStringNotEmpty(str);
    expect(resultFn).toThrow(/Invalid input - must not be empty./);
  });

  it("should throw an error if an string with a space is passed", () => {
    const str = " ";
    const resultFn = () => validateStringNotEmpty(str);
    expect(resultFn).toThrow(/Invalid input - must not be empty./);
  });
});
