// find even and odd numbers in a array

let evenNums = [];
let oddNums = [];

function findNumberTypes(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evenNums.push(arr[i]);
    } else {
      oddNums.push(arr[i]);
    }
  }
  console.log(evenNums);
  console.log(oddNums);
}

console.log(findNumberTypes([1, 2, 3, 4, 5, 5, 7, 8, 9]));

console.log(findNumberTypes([100, 99, 97, 98, 96, 95, 94, 93, 92, 91, 57]));

const personArray = [
  {
    name: "sagnikc395",
    age: 22,
  },
  {
    name: "sagnikc2",
    age: 45,
  },
];

//find the ages if they are even in the object
const filterObject = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].age % 2 == 0) {
      return {
        name: array[i].name,
        status: "Success",
        nextAge: array[i].age + 1,
      };
    }
  }
};

console.log(filterObject(personArray));
