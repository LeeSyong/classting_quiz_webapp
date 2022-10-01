module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },
  ignorePatterns: ["node_modules/", ".eslintrc.*", "package.json"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "prettier",
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
    "curly": ["warn"],
    "eqeqeq": ["warn"],
    "no-var": ["error"],
    "prefer-const": ["warn"],
    "prefer-destructuring": ["warn"],
    "react/prop-types": ["warn"],
    "react/no-children-prop": ["off"],
    "import/named": ["off"],
    "import/export": ["off"],
  },
  parserOptions: {
    parser: "babel-parser",
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
      }
    },
  },
};
