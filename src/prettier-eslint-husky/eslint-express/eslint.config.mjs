import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },

  {
    languageOptions: { globals: globals.node },
    rules: {
      //custom rules
      //1.indentation rules
      indent: ["error", 2],
      //2.space between function parenthesis
      "space-before-function-paren": ["error", "always"],
      //3.no-space inside parentheses
      "space-in-parens": ["error", "never"],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
