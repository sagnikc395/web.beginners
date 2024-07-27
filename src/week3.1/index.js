const express = require("express");
const app = express();

//1. user needs to send a kindeyId as a query param which should
// be a number from 1-2
//2. user should send a username and a password in headers.

app.get("/health-checkup", (req, res) => {
  // slop way of doing health checkups here
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;

  if (username !== "sagnik" && password !== "pass") {
    res.status(403).json({
        msg: "User doesnt exist!"
    });
    return;
  }

  if(kidneyId !== 1 || kidneyId !== 2 ) {
    res.status(411).json({
        msg: "wrong inputs!"
    });
    return;
  }
//valid kidneys
  res.send(`Your heart is healthy !`);
});
