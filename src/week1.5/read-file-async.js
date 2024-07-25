const fs = require("fs");

//reading files from the filesystem

fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log(data);
});
