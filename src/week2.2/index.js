//creating a http server from scratch

const express = require("express");
const bodyParser = require("body-parser");
//either set process in env variables or use a static port
// or can use .env file to define it, or export it in our shell using export PORT etc.
const port = process.env.PORT || 3000;

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

app.post("/api/conversation", (req, res) => {
  const message = req.body.message;
  res.json({
    output: "long response !!!!",
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
