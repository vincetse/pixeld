import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  // 1. Target all relevant files
  { files: ["**/*.{js,mjs,cjs,ts}"] },

  // 2. Base recommended configurations
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  // 3. Custom rule overrides
  {
    rules: {
      // Disables the error that blocked your server from starting
      "no-console": "off",

      // Recommended: Warn on 'any' instead of erroring
      "@typescript-eslint/no-explicit-any": "warn",

      // Allow unused variables if they start with an underscore (e.g., _req)
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
    }
  },

  // 4. Global ignores (replaces .eslintignore)
  {
    ignores: ["dist/", "node_modules/"]
  }
];
