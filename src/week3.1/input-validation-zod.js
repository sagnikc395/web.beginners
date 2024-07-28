const express = require("express");
const zod = require("zod");
const app = express();

app.use(express.json());

const schema = zod.array(zod.number());

/*

{
    email: string -> email,
    password: atleast 8 letters 
    country: "IN","US",
    ip : v6 
}
*/

const schema2 = zod.object({
  email: zod.string(),
  password: zod.string(),
  country: zod.literal("IN").or(zod.literal("US")),
  ipaccess: zod.string().ip({
    //only ip v6 allowed.
    version: v6,
  }),
});

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
  const kidneys = req.query.kidneys;
  const response = schema.safeParse(kidneys);

  if (!response.success) {
    res.status(411).json({
      msg: "input is invalid",
    });
  } else {
    const kidneyLength = kidneys.legnth;

    //   if (kidneyId != 1 && kidneyId != 2) {
    //     res.status(403).json({
    //       msg: "Incorrect inputs",
    //     });
    //   } else {
    //     next();
    //   }
    res.send({
      response,
    });
  }

  next();
}

app.listen("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  //do something with kidney here

  res.send("your kidney is healthy !");
});

//global catches -> handles all the exceptions
app.use((err, req, res, next) => {
  res.status(500).json({
    msg: "sorry something is up with our server !",
  });
});

app.listen(5000);
