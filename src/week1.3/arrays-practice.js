//push into array

let init = [1, 2, 3];

//add item to the back of array
init.push(12, 123);
console.log(init);

//remove from the back
init.pop();
console.log(init);

//remove from the front
init.shift();
console.log(init);

//put into front of array
init.unshift(123);
console.log(init);

//to merge 2 arrays
let anotherArr = [4, 5, 6];
anotherArr = init.concat(anotherArr);
console.log(anotherArr);
