/**
 * store data in a inmemory hosptial
 * create 4 routes -> 4 things that the hopital can do
 * 1. GET -> user can check how many kindneys they have and their health
 * 2. POST -> user can add a new kidney
 * 3. PUT -> user can replace a kidney, make it healthy
 * 4. DELETE -> user can remove a kidney.
 */

const express = require("express");
const bodyParser = require("body-parser");

const PORT = 4000;

const app = express();

// let kidneyObj = {
//   kidney: 2,
//   health: "unstable",
// };
app.use(bodyParser.json());

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

app.post("/", (req, res) => {
  //   kidneyObj[kidney] += 1;
  //   const repr = `The current number of kidneys: ${kidneyObj.kidney} and the status is ${kidneyObj.health}`;
  //   res.send(repr);
  // add a new kidney stastus for every post request
  const isHealthy = req.body.isHealthy;
  //update the inmemory object
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  console.log("Post Method has been called !");
  return res.json({
    msg: "Done!",
  });
});

app.put("/", (req, res) => {
  //   const kidneystatus = req.query.kidneys;
  //   kidneyObj["health"] = kidneystatus;
  //   const repr = `The current number of kidneys: ${kidneyObj.kidney} and the status is ${kidneyObj.health}`;
  //   res.send(repr);
  // update all kidenys of user to healthy
  users[0].kidneys.forEach((obj) => {
    obj.healthy = true;
  });
});

app.delete("/", (req, res) => {
  //   if (kidneyObj[kidney] < 0) {
  //     throw new Error(`Cannot delete any more kidneys!`);
  //   }
  //   kidneyObj["kidney"] -= 1;
  //   const repr = `The current number of kidneys: ${kidneyObj.kidney} and the status is ${kidneyObj.health}`;
  //   res.send(repr);

  // remove all their unhealthy kidneys
  let res = [];
  users[0].kidneys.forEach((kidney) => {
    if (kidney.healthy) {
      res.push({
        healthy: true,
      });
    }
  });
  users[0].kidneys = res;
  res.send({ msg: "done!" });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
