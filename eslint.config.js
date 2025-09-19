import js from "@eslint/js"
import prettier from "eslint-config-prettier"

export default [
  {
    files: ["**/*.js"], 
    ignores: ["node_modules/**", "dist/**"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },

    plugins: {
      prettier,
    },

    rules: {
      ...js.configs.recommended.rules,
      ...prettier.rules,
      "prettier/prettier": "error",
    },
  },
]