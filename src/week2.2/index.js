//creating a http server from scratch

const express = require("express");
const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
