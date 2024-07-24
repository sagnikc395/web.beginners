//time related functions in js

Date();

// class pre made for us and implement on top of it

const currentDate = new Date();

console.log(currentDate.getDate());
console.log(currentDate.getFullYear());
//getFullYear()-1900 = getYear() !!!! js shenanigans !!!

console.log(currentDate.getMonth());

console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());

//setting component pof the date
currentDate.setFullYear(2050);
currentDate.setMonth(8);
console.log("New Date -> " + currentDate);

console.log(currentDate.getTimezoneOffset());
console.log(currentDate.toDateString());

//get time in ms from 1970s (Epoch Timestamp)
console.log(currentDate.getTime());

function calculateSum() {
  let a = 0;
  for (let i = 0; i < 100_000; i++) {
    a += i;
  }
  return a;
}

let start = new Date().getTime();
calculateSum();
let end = new Date().getTime();
console.log("Time taken in ms ", end - start);
