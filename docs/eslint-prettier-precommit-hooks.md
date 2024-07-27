## ESlint ,Prettier and Pre Commit Hooks

- what exactly is linting and how do we do it in a mern stack project ?

  - eslintrc.json
  - eslintignore
  - prettierignore
  - prettierignore
    etc.many such files are made.

- Linting:

  - process of running a program that analyzes source code to flag programming errors, bugs and stylistic errors.
  - a linter lints the code and finds the bugs, cleans the code.
  - some bugs it can fix itself, others developers have to fix themselves.

- Why lint ?

  - multiple developers in a team need a similar design pattern and similar coding pattern.
  - good readibility and maintainibility of code.
  - automatic linting so that developer doesnt have to manually make those stylistic changes.

- Tools:

  - ESLint -> linting(superset of prettier)
  - Prettier -> linting
  - Husky -> precoomit hooks

- Two Types of Lints :

  1. Code Analysis(similar to TS checks)

  - analyzes the code to find and fix problems according to set of rules. These problems can include syntax errors, stylistic issues and potential bugs.

  2. Code Formatting(pure stlisitc changes)

  - prettier used for this
  - eslint can also do this

- ESLint lets us do both 1 and 2.
- Prettier is used for 2.

### ESLint :

- ESlint statically analyses the code and points out bugs -> by creating abstract syntax tree from it .
- built into vscode
- can run part of CI/CD as well.

- **also use yarn when installing it into the app, not npm**

  - run as `npm init @eslint/config@latest`

- eslint.config.mjs is the configuration created -> modern approach -> downside is that we may not be able to bring some plugins in this

- package.json:

  - add a new script in package.json to include lint in the commands to check for the lints.
  - also add `yarn add typescript` for the project, otherwise it would complain.

- and then run as yarn lint

- to ignore the eslint recommendations we can ignore as
  eg:
  // eslint-disable-next-line

### how to add own rules and prettier checks ?

- ESLint primary use for static anlysis of code.
- It can also be extended to add stylistic code changes and enforcing config options and adding indentation rules.

- ESLInt ideally meant for checking code quality and not code formatting.
- We can still enable code formatting.

  - add inot the eslint.config.mjs

- however most of the time , you use prebuilt configuration for linting and stylisitc changes.

  - common available configs:
    - airbnb

- the root folder should have the eslint config.
- eslintconfig.json is the old version and compatible with various other stuff.
- with eslint vscode extension, we can create a .vscode folder and keep our config to autoformat code and indent them while saving.

### ESLint in React Project

- fyi you dont have to, vite the bundler, already does this.
- makes this a whole lot easier.
- it uses .eslintrc.cjs instead of the eslint.config.mjs that we created.

### Popular ESlint config:
- we can roll our own config, our use a community supported popular one.
- most popular are:
  - **airbnb javascript guide**
  - vercel configuration
  - shopify config 
  - meta config 

- 