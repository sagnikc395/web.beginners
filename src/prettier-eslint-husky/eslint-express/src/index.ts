import express from "express";

const app = express();
// eslint-disable-next-line
const x = 1;

app.get("/", (req, res) => {
  res.json({
    message: "hi there",
  });
});
