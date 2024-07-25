const fs = require("fs");

//reading files from the filesystem

//async function, will execute later
fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log(data);
});

//this is a sync call, should execute first
console.log("hi there");
