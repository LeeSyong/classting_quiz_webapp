module.exports = {
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  ignorePatterns: ["node_modules/", ".eslintrc.*", "package.json"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react/react-in-jsx-scope": ["off"],
    "prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
    "no-const-assign": ["warn"],
    "no-dupe-else-if": ["error"],
    "no-unused-vars": ["warn"],
    "no-irregular-whitespace": ["error"],
    "camelcase": ["error"],
    "curly": ["warn"],
    "eqeqeq": ["warn"],
    "no-var": ["error"],
    "prefer-const": ["warn"],
    "prefer-destructuring": ["warn"],
    "react/prop-types": ["warn"],
  },
  parserOptions: {
    parser: "babel-parser",
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
};
