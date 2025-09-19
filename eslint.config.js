import prettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    files: ["**/*.js"],
    plugins: {
      prettier
    },
    rules: {
      ...eslintConfigPrettier.rules,
      "prettier/prettier": "error"
    }
  }
];