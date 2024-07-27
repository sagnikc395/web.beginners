/**
 * store data in a inmemory hosptial
 * create 4 routes -> 4 things that the hopital can do
 * 1. GET -> user can check how many kindneys they have and their health
 * 2. POST -> user can add a new kidney
 * 3. PUT -> user can replace a kidney, make it healthy
 * 4. DELETE -> user can remove a kidney.
 */

const express = require("express");

const PORT = 4000;

const app = express();

// let kidneyObj = {
//   kidney: 2,
//   health: "unstable",
// };

//default state
const users = [
  {
    name: "sagnikc",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", (req, res) => {
  //user can check how many kidneys and their health
  //const repr = `The current number of kidneys: ${kidneyObj.kidney} and the status is ${kidneyObj.health}`;
  //res.send(repr);
  //   const item = req.query.name;
  //const username = users[item].name;
  const sagnikKidneys = users[0].kidneys;
  const kidneyCount = sagnikKidneys.length;

  const healthyKidneys = sagnikKidneys.reduce(
    (count, item) => (item ? count + 1 : count),
    0
  );
  const unhealthyKidneys = kidneyCount - healthyKidneys;

  res.json({
    healthyKidneys,
    unhealthyKidneys,
    kidneyCount,
  });
});

app.post("/addkidney", (req, res) => {
  kidneyObj[kidney] += 1;
  const repr = `The current number of kidneys: ${kidneyObj.kidney} and the status is ${kidneyObj.health}`;
  res.send(repr);
});

app.put("/putkey", (req, res) => {
  const kidneystatus = req.query.kidneys;
  kidneyObj["health"] = kidneystatus;
  const repr = `The current number of kidneys: ${kidneyObj.kidney} and the status is ${kidneyObj.health}`;
  res.send(repr);
});

app.delete("/delkidney", (req, res) => {
  if (kidneyObj[kidney] < 0) {
    throw new Error(`Cannot delete any more kidneys!`);
  }
  kidneyObj["kidney"] -= 1;
  const repr = `The current number of kidneys: ${kidneyObj.kidney} and the status is ${kidneyObj.health}`;
  res.send(repr);
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
