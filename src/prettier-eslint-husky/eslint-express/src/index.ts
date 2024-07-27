import express from "express";

const app = express();
const x = 1;

app.get("/", (req, res) => {
  console.log(`the value of x is ${x}`);
  res.json({
    message: "hi there",
  });
});
