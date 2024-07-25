//creating a http server from scratch

const express = require("express");
const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("hello world!");
});

//sending a post request

app.post("/data-send", (req, res) => {
  //log all the headers
  console.log(req.headers);
  res.send({
    msg: "2+2 = 4",
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
