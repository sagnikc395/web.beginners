//given a string manipulation , to practice them

//get the length of a string
console.log("ANCASDASDASDASDAS".length);

//findIndexOf -> what point is the word present, if not present then -1
//index only of the first word
console.log("hello world".indexOf("world"));

//for last word
console.log("hello world hello world".lastIndexOf("world"));

//slice -> we want a part of the string i.e substring, does not include the last index
console.log("hello world nice to meet you".slice(0, 15));

// similar based on this we can write a cut function to cut on a index

function cutIt(str, startIdx, endIdx) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i >= startIdx && i < endIdx) {
      newStr = newStr + str[i];
    }
  }
  return newStr;
}

console.log(cutIt("sagnik chatterjee", 0, 12));

//replace method -> to replace with a word with a new string
// note that it will only replace the first one!
console.log("jello world, jello are you ?".replace("jello", "hello"));

// split -> split on a delimiter
console.log("hi;my;name;is;sagnik".split(";"));
