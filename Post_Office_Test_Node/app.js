export const distClosestNumbers = (array) => {
  const values = [];

  array.forEach((number, index) => {
    array.forEach((currentNumber, innerIndex) => {
      if (index !== innerIndex) {
        values.push(Math.abs(currentNumber - number));
      }
    });
  });

  return Math.min(...values);
};

export const returnLongestPalindrome = (string) => {
  const isPalindrome = (string) => {
    const re = /[\W_]/g;
    const lowercaseRegexedString = string.toLowerCase().replace(re, "");
    const reversedString = lowercaseRegexedString.split("").reverse().join("");
    return reversedString === lowercaseRegexedString;
  };

  const getSpaceInterval = (string) => {
    const stringLength = string.split(" ").length;
    return Math.floor(stringLength / 2);
  };

  const getBiggestSinglePalindrome = (string) => {
    const arrayPalindrome = string.split(" ");
    const filtered = arrayPalindrome
      ?.filter(isPalindrome)
      ?.sort((a, b) => a.length - b.length)
      ?.pop();
    return filtered;
  };

  const getBiggestMultiPalindrome = (string) => {
    const maxSpaceInterval = getSpaceInterval(string);
    const answerArray = [];

    for (let index = 2; index < maxSpaceInterval; index++) {
      const regexStr = "(.*?s){" + index + "}";
      const regex = new RegExp(regexStr, "g", "is");
      const string2 = string.toLowerCase().match(regex);
      if (string2) answerArray.push(string2);
    }

    const result = answerArray
      ?.flat()
      ?.filter(isPalindrome)
      ?.sort((a, b) => a.length - b.length)
      .pop();
    if (result?.length) return result;

    return false;
  };

  const getCorrectAnswer = (string) => {
    const singlePalindrome = getBiggestSinglePalindrome(string);
    const multiPalindrome = getBiggestMultiPalindrome(string);
    let result;

    if (singlePalindrome && !multiPalindrome) {
      result = singlePalindrome;
    } else {
      result =
        singlePalindrome.length > multiPalindrome?.length
          ? singlePalindrome
          : multiPalindrome;
    }
    return result;
  };

  return getCorrectAnswer(string);
};

export const isNumberPrime = (value) => {
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
};
