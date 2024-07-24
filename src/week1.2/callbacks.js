// function sum(num1, num2) {
//   return num1 + num2;
// }

// function displayResult(data) {
//   console.log(`Result of the sum is ${data}`);
// }

// function displayResultPassive(data) {
//   console.log(`Sum's result is: ${data}`);
// }

// const ans = sum(1, 2);
//need to internally call this, using callbacks

//pass a third arg, to call a function that we need to call
// passing a function as a argumen, also called as callbacks
function sum(num1, num2, fnToCall) {
  return fnToCall(num1 + num2);
}

function displayResult(data) {
  console.log(`Result of the sum is : ${data}`);
}

const result = sum(1, 2, displayResult);

// function calculateArithmatic(a, b, type) {
//   if (type == "sum") {
//     return a + b;
//   }
//   if (type == "minus") {
//     return a - b;
//   }
// }

// const value = calculateArithmatic(1, 2, "sum");
// console.log(value);

setTimeout(() => sum(45, 6, displayResult), 1 * 1000);
