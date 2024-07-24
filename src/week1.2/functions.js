//function that finds the sum of two numbers
const sumOf2Nums = (num1, num2) => num1 + num2;

//displays the result in a prettry format

const displaySum = (sumFn) =>
  `The result of the sum of the 2 numbers is ${sumFn}`;

// another function that takes this sum and passive tense
const displaySumPassive = (sumFn) =>
  `The result of the sum of the 2 numbers was ${sumFn}`;

console.log(displaySum(sumOf2Nums(123, 456)));
console.log(displaySumPassive(sumOf2Nums(678, 890)));
