//creating a http server from scratch

const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

//middlewares -> any time body has some json
// this will extrac the json and put this here.
app.use(bodyParser.json());
app.get("/", (req, res) => {
  console.log(req.body);
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
