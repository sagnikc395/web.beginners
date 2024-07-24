//JSON -> an representation of data , javascript object notation

const user = '{"name": "harkirat","age":"21"}';

// can't index as this is a string,no longer a object
//need to decode to understand the shape of the data

const decoded = JSON.parse(user);
console.log(decoded["age"]);

//to further encode again to string
const encode = JSON.stringify(decoded);

console.log(encode);
