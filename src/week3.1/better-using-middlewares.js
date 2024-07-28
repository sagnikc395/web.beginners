const express = require("express");
const app = express();

function userMiddleware(req, res, next) {
  const username = req.query.username;
  const password = req.query.password;

  if (username !== "sagnik" && password !== "pass") {
    res.status(403).send({
      msg: "incorrect inputs",
    });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const kidneyId = req.query.kidneyId;

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(403).json({
      msg: "Incorrect inputs",
    });
  } else {
    next();
  }
}

app.listen("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  //do something with kidney here

  res.send("your kidney is healthy !");
});

app.listen(5000);
