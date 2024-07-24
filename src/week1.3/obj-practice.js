//objects in javascripts
// and related methods

//sample object
const sampleObj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  key4: "value4",
};

console.log(sampleObj);

//get all the keys
//static method on the class Object and returns all the keys of the object
console.log(Object.keys(sampleObj));

//get all the values
//same as above
console.log(Object.values(sampleObj));

//entries -> array of array of keys and values
console.log(Object.entries(sampleObj));

//hasOwnProperty -> //check if the object has the property or not
// dont check in prototypical hioerarchy and go down
console.log(sampleObj.hasOwnProperty("property") ? true : false);

//Object.assign -> allows us to shove more things in the orject

console.log(Object.assign({}, sampleObj, { anotherKey: "anotherValue" }));
