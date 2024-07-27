## Middlewares,Authentication , Global Catches and Zod

- decent stuff of hard backend stuff to understand.
- doctor is single threaded.
- 50% of backend stuff that we do.
- eg: Hospital(Covid) -> bull run

  - Before you reach to the doctor:
    - predo a lot of stuff , to decrease load in the main methods, picky checks to happen.
    - your aadhar/insurance info is taken. Only if we have insurance then we proceed.
    - Blood test is done, inly if no STD does user proceed.
    - BP is checked, only if BP is reasonable, then user proceeds.

- Equivalent code for this -> exposing a single route for now,
- simple function to simulate.

```js
const express = require("express");

const app = express();

app.get("/health-checkup", (req, res) => {
  res.send(`Your heart is healthy!`);
});
```

- how to do the prechecks ? should we handle this at doctor's level ? or check them previously at reception level?
  i.e

  - Auth checks ? -> Does this user have funds to visit the doctor.
  - Ensure input by the user is valid (BP/ blood tests)

- To do this we do -> **Middlewares**
