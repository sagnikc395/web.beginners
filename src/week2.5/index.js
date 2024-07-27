const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3000;
const app = express();

function heavyCompute(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans += i;
  }
  return ans;
}

app.get("/check", (req, res) => {
  res.send(`connection is alive!`);
});

app.get("/xray", (req, res) => {
  //using query paramters
  // n is the input paramter
  const n = req.query.n;
  if (n === undefined) {
    res.send(`Please provide a query parameter to compute!`);
  }
  const ans = heavyCompute(n);
  res.send(`Hi your ans is ${ans}`);
});






app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
