const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3000;
const app = express();

app.get("/check", (req, res) => {
  res.send(`connection is alive!`);
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
