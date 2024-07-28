const express = require("express");
const app = express();

//1. user needs to send a kindeyId as a query param which should
// be a number from 1-2
//2. user should send a username and a password in headers.

app.get("/health-checkup", function (req, res) {
  // slop way of doing health checkups here
  const kid = req.query.kid;
  const username = req.headers.username;
  const password = req.headers.password;

  if (username !== "sagnik" || password !== "pass") {
    res.status(403).json({
      msg: "Failed to Authenticate!",
    });
    return;
  }

  if (kid !== 1 || kid !== 2) {
    res.status(403).json({
      msg: "wrong inputs!",
    });
    return;
  }
  //valid kidneys
  res.json({ msg: `Your kidney is 🔥!` });
});

app.listen(3000, () => {
  console.log(`Server started at http://localhost:3000`);
});
