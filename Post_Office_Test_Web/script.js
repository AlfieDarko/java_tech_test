"use strict";

function evaluateData() {
  let showBox = document.getElementById("showBox");
  let dataString = showBox.innerHTML;

  dataString = dataString.replace(/\s/g, "");
  gatherData(dataString)
    .then((parsedData) => {
      runOperations(
        parsedData.numbers[0],
        parsedData.numbers[1],
        parsedData.operator
      ).then((answer) => {
        showBox.textContent = answer;
      });
    })
    .catch((err) => console.log(err));
}

function addToShowBox(input) {
  let showBox = document.getElementById("showBox");
  let isShowBoxEmpty = showBox == false && input === "0";

  if (!isShowBoxEmpty) {
    showBox.innerHTML += input;
  }
}

function runOperations(numOne, numTwo, operator) {
  return new Promise((resolve, reject) => {
    try {
      let answer = 0;
      switch (operator) {
        case "+":
          answer = parseInt(numOne) + parseInt(numTwo);
          break;
        case "-":
          answer = numOne - numTwo;
          break;
        case "/":
          answer = numOne / numTwo;
          break;
        case "*":
          answer = numOne * numTwo;
          break;
      }
      resolve(answer);
    } catch (err) {
      reject(err);
    }
  });
}

function gatherData(dataString) {
  return new Promise((resolve, reject) => {
    try {
      let parsedData = {
        numbers: dataString.split(/\D+/),
        operator: "",
      };

      dataString.split("").forEach((character, index) => {
        let value = parseInt(character);
        if (isNaN(value)) {
          parsedData.operator = dataString.charAt(index);
        }
      });

      resolve(parsedData);
    } catch (err) {
      reject(err);
    }
  });
}

function clearEntry() {
  let showBox = document.getElementById("showBox");
  showBox.innerHTML = "";
}
