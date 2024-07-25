const fs = require("fs");

//our own wrapper read file using promises

function wrapperReadFile() {
  return new Promise((resolve) => {
    fs.readFile("a.txt", "utf-8", (err, data) => {
      resolve(data);
    });
  });
}

function onDone(data) {
  console.log("File successfully read!");
  console.log(data);
}

wrapperReadFile().then(onDone);
