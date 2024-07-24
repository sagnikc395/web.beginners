//some basic practice with javascript.

console.log("hello everynion! 😸");
let a = "muhahahahah!";
console.log(a);

function greetPerson(firstName, lastName) {
  return `Hello ${firstName} ${lastName}! Welcome to some programming fun!`;
}

console.log(greetPerson("sagnik", "chatterjee"));

//greet on gender
function greetOnGender(firstName, lastName, gender) {
  if (gender.toLowerCase() === "male") {
    return `Hello Mr. ${firstName} ${lastName} ! Welcome here!`;
  } else if (gender.toLowerCase() === "female") {
    return `Hello Ms. ${firstName} ${lastName}! Welcome here!`;
  } else {
    return `Sir this is a conservative state! 😭😈🔫`;
  }
}

console.log(greetOnGender("Sherlock", "Holmes", "trans"));

//counts from 0-1000 and prints
for (let i = 0; i < 1001; i++) {
  console.log(`Item number ${i}\t`);
}

