import * as app from "../app";

describe("distClosestNumbers()", () => {
  it("should return the correct number (10)", () => {
    const testData = [4, 56, 34, 66];
    expect(app.distClosestNumbers(testData)).toEqual(10);
  });

  it("should return the correct number (2)", () => {
    const testData = [3, 9, 50, 15, 99, 7, 65];
    expect(app.distClosestNumbers(testData)).toEqual(2);
  });
});

describe("returnLongestPalindrome()", () => {
  it("should return longest palindrome for string 'anna kayak mom racecar sagas' ", () => {
    const testData = "anna kayak mom racecar sagas";
    expect(app.returnLongestPalindrome(testData)).toEqual("racecar");
  });

  it("should return true for string 'items Step on no pets yay root tenet repaper'", () => {
    const testData = "Step on no pets yay root tenet repaper";
    expect(app.returnLongestPalindrome(testData)).toEqual("step on no pets");
  });
});

describe("isNumberPrime()", () => {
  it("should return false for number 999", () => {
    expect(app.isNumberPrime(999)).toEqual(false);
  });

  it("should return true for 233", () => {
    expect(app.isNumberPrime(233)).toEqual(true);
  });
});
